"use client"

import { A2uiCanvas, useA2UIStore, } from "@a2ui-adaptive/react"
import "@a2ui-adaptive/react/styles.css"

const MOCK_SURFACE = "mock-surface"

function mockBackend() {
    const apply = (msg: Record<string, unknown>) => useA2UIStore.getState().applyMessage(msg)

    apply({
        version: "v1.0",
        createSurface: {
            surfaceId: MOCK_SURFACE,
            catalogId: "AppCatalog",
        },
    })

    apply({
        version: "v1.0",
        updateComponents: {
            surfaceId: MOCK_SURFACE,
            components: [
                { id: "root", component: "Page", children: ["alert", "weather", "metrics", "chart", "news", "products", "marketTable", "mo1","mo2"] },
                { id: "alert", component: "Alert", title: "Good morning, Bhanu", message: "Here is your adaptive dashboard, rendered live from A2UI messages." },
                { id: "weather", component: "WeatherCard", location: { path: "/weather/location" }, temperature: { path: "/weather/temp" }, condition: { path: "/weather/condition" }, date: { path: "/weather/date" } },
                { id: "metrics", component: "Page", children: ["m1", "m2", "m3"] },
                { id: "m1", component: "MetricCard", title: { path: "/market/metrics/0/title" }, value: { path: "/market/metrics/0/value" }, delta: { path: "/market/metrics/0/delta" }, unit: { path: "/market/metrics/0/unit" } },
                { id: "m2", component: "MetricCard", title: { path: "/market/metrics/1/title" }, value: { path: "/market/metrics/1/value" }, delta: { path: "/market/metrics/1/delta" }, unit: { path: "/market/metrics/1/unit" } },
                { id: "m3", component: "MetricCard", title: { path: "/market/metrics/2/title" }, value: { path: "/market/metrics/2/value" }, delta: { path: "/market/metrics/2/delta" }, unit: { path: "/market/metrics/2/unit" } },
                { id: "chart", component: "Chart", title: { path: "/market/title" }, series: { path: "/market/series" } },
                { id: "news", component: "NewsList", children: ["news1", "news2"] },
                { id: "news1", component: "NewsCard", badge: { path: "/news/0/badge" }, title: { path: "/news/0/title" }, summary: { path: "/news/0/summary" }, source: { path: "/news/0/source" } },
                { id: "news2", component: "NewsCard", badge: { path: "/news/1/badge" }, title: { path: "/news/1/title" }, summary: { path: "/news/1/summary" }, source: { path: "/news/1/source" } },
                { id: "products", component: "ProductList", children: ["p1", "p2", "p3"] },
                { id: "p1", component: "ProductCard", title: { path: "/shopping/products/0/title" }, rating: { path: "/shopping/products/0/rating" }, price: { path: "/shopping/products/0/price" } },
                { id: "p2", component: "ProductCard", title: { path: "/shopping/products/1/title" }, rating: { path: "/shopping/products/1/rating" }, price: { path: "/shopping/products/1/price" } },
                { id: "p3", component: "ProductCard", title: { path: "/shopping/products/2/title" }, rating: { path: "/shopping/products/2/rating" }, price: { path: "/shopping/products/2/price" } },
                { id: "marketTable", component: "Table", columns: ["Symbol", "Name", "Price", "Change"], rows: { path: "/market/movers" } },
                { id: "mo1", component: "ProductCard", title: { path: "/movies/products/0/title" }, rating: { path: "/movies/products/0/rating" }, price: { path: "/movies/products/0/price" } },
                { id: "mo2", component: "ProductCard", title: { path: "/movies/products/1/title" }, rating: { path: "/movies/products/1/rating" }, price: { path: "/movies/products/1/price" } },
            ],
        },
    })

    apply({
        version: "v1.0",
        updateDataModel: {
            surfaceId: MOCK_SURFACE,
            value: {
                weather: { location: "Hyderabad", temp: 28, condition: "Partly cloudy", date: "Thu, Aug 20" },
                market: {
                    title: "NIFTY 50 intraday",
                    metrics: [
                        { title: "NIFTY 50", value: 24897, delta: 0.84, unit: "pts" },
                        { title: "SENSEX", value: 81500, delta: 0.71, unit: "pts" },
                        { title: "GOLD", value: 71450, delta: -0.32, unit: "/10g" },
                    ],
                    series: [
                        { label: "9:15", value: 24520 },
                        { label: "10:00", value: 24630 },
                        { label: "10:45", value: 24580 },
                        { label: "11:30", value: 24710 },
                        { label: "12:15", value: 24897 },
                    ],
                    movers: [
                        { Symbol: "RELIANCE", Name: "Reliance Industries", Price: 2874, Change: 2.1 },
                        { Symbol: "TCS", Name: "Tata Consultancy", Price: 4120, Change: 1.4 },
                        { Symbol: "HDFCBANK", Name: "HDFC Bank", Price: 1685, Change: -0.8 },
                    ],
                },
                news: [
                    { badge: "Markets", title: "Nifty hits fresh record high on broad-based buying", summary: "Index-heavyweights led the rally as IT and banks gained.", source: "Financial Desk" },
                    { badge: "Weather", title: "Monsoon revival: heavy rain forecast for Hyderabad", summary: "IMD expects scattered showers through the weekend.", source: "Weather Bureau" },
                ],
                shopping: {
                    products: [
                        { title: "Sony WH-1000XM5 Headphones", price: 26990, rating: 4.7 },
                        { title: "MacBook Air M4 13\"", price: 114900, rating: 4.8 },
                        { title: "Nike Air Zoom Pegasus 41", price: 11995, rating: 4.5 },
                    ],
                },

                movies: {
                    products: [
                        { title: "Titanic", price: 26990, rating: 4.7 },
                        { title: "Gladiator", price: 114900, rating: 4.8 },
                        // { title: "Nike Air Zoom Pegasus 41", price: 11995, rating: 4.5 },
                    ],
                },
            },
        },
    })
}

export function A2UI() {
    return <A2uiCanvas className="min-h-screen w-full" />
}

mockBackend()