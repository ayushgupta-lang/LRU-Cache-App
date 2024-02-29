package main

import (
	"net/http"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	lru "github.com/hashicorp/golang-lru"
)

var (
	cache *lru.Cache
)

func init() {
	cache, _ = lru.New(1024)
}

func setHandler(c *gin.Context) {
	var input struct {
		Key   string `json:"key"`
		Value string `json:"value"`
	}

	if err := c.BindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	key := input.Key
	value := input.Value

	cache.Add(key, value)

	// time.AfterFunc(time.Second*5, func() {
	// 	cache.Remove(key)
	// })

	time.AfterFunc(2*time.Minute, func() {
		cache.Remove(key)
	})

	c.JSON(http.StatusOK, gin.H{"message": "Key/Value set successfully"})
}

func getHandler(c *gin.Context) {
	key := c.Query("key")

	if val, ok := cache.Get(key); ok {
		c.JSON(http.StatusOK, gin.H{"message": val})
	} else {
		c.JSON(http.StatusNotFound, gin.H{"error": "Key not found in the cache"})
	}
}

func main() {
	r := gin.Default()

	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:3000"}
	config.AllowMethods = []string{"GET", "POST"}
	r.Use(cors.New(config))

	r.POST("/set", setHandler)
	r.GET("/get", getHandler)

	r.Run(":8090")
}
