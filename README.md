# Getting Started with Project

News Search Microservice

## Overview

This project implements a News Search Microservice to fetch and organize news articles based on user-defined time intervals. The service uses the "Everything" API from NewsAPI to retrieve data and groups results based on publishedAt dates. Users can specify interval types (e.g., hours, days) and duration. The application is designed with production readiness in mind, ensuring performance, scalability, and security.

### Features

Dynamic Grouping: Results are grouped into buckets based on intervals (e.g., last N hours, days, weeks).

Customizable Inputs: Users can define N (duration) and interval types (e.g., minutes, days). Defaults to 12-hour intervals if no input is provided.

Offline Mode: The service can toggle to offline mode and function with cached or fallback data.

Resilient Design: Handles cases where the NewsAPI is unavailable and continues to deliver results.

User Interfaces: Accessible via a web browser, Postman, or CLI (JSON response).

Security: Sensitive information (e.g., API keys) is encrypted and secured.

### `Frontend`

![Reactjs](https://raw.githubusercontent.com/m879/news-api-microservice/master/Reactjs.png)

### `Sequence Diagram`

![Sequence Diagram](https://raw.githubusercontent.com/m879/news-api-microservice/master/sequence%20diagram.png)


### Security and Performance

API keys are stored securely using encrypted properties.

TDD and BDD principles are followed for high-quality code.

Optimized queries and caching ensure fast responses.


### Backend Setup

Clone the repository

Build the Spring Boot application : mvn clean install

Run the application: java -jar target/news-service.jar

### Frontend Setup

Install dependencies: npm install

Start the React application: npm start










