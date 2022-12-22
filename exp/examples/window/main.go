package main

import (
	_ "embed"
	"log"

	"github.com/wailsapp/wails/exp/pkg/options"

	"github.com/wailsapp/wails/exp/pkg/events"

	"github.com/wailsapp/wails/exp/pkg/application"
)

func main() {
	app := application.New()

	// Create window
	myWindow := app.NewWindowWithOptions(&options.Window{
		Title:          "My Window",
		Width:          800,
		Height:         600,
		URL:            "https://wails.io",
		EnableDevTools: true,
		Mac: &options.MacWindow{
			Backdrop: options.MacBackdropTranslucent,
			TitleBar: options.TitleBarHiddenInsetUnified,
		},
	})
	myWindow.On(events.Mac.WindowDidBecomeMain, func() {
		println("Window did become main")
	})

	err := app.Run()

	if err != nil {
		log.Fatal(err)
	}
}