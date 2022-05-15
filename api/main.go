package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"

	"github.com/gin-gonic/gin"
)

func main() {
	data, err := ioutil.ReadFile("./raw_snapshot.json")
	if err != nil {
		fmt.Print(err)
	}

	// json data
	var obj interface{}

	// unmarshall it
	err = json.Unmarshal(data, &obj)
	if err != nil {
		fmt.Println("error:", err)
	}
	r := gin.Default()

	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"data": obj,
		})
	})
	r.Run()
}
