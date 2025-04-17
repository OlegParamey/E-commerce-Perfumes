# API Documentation

## Overview

This API provides an interface for performing operations on a collection of perfume products. It allows users to filter, sort, and retrieve perfume data, as well as provide a list of available filters.

## Base URL

The base URL for the API is:
`http://localhost:3000`

## Endpoints

### 1. Get All Perfumes

-   **Endpoint:** `/perfumes`
-   **Method:** `GET`
-   **Query Parameters:**

    -   `brand` (optional): Filter perfumes by brand name.
    -   `title` (optional): Filter perfumes by title.
    -   `capacity` (optional): Filter perfumes by capacity.
    -   `price_min` (optional): Filter perfumes with a price greater than or equal to this value.
    -   `price_max` (optional): Filter perfumes with a price less than or equal to this value.
    -   `sort` (optional): Sort perfumes by a specified parameter (e.g., `price`, `brand`). The format for this parameter will depend on the implementation of the sorting function.
    -   `search` (optional): A search term that will filter perfumes based on matching substrings in either the title or brand (case insensitive).

-   **Response:**
    -   **Success (200 OK):**
        -   Returns an array of filtered, converted, and possibly sorted perfume objects.
    -   **Error (e.g., 400 Bad Request):**
        -   Will return an error message if the query parameters are incorrectly formatted.

#### Example Request:

```http
GET /perfumes?brand=Chanel&price_min=50&sort=price
```

#### Example Response:

```json
[
	{
		"id": 1,
		"title": "Chanel No. 5",
		"brand": "Chanel",
		"capacity": "100ml",
		"price": 75.0
	},
	{
		"id": 2,
		"title": "Chanel Chance",
		"brand": "Chanel",
		"capacity": "50ml",
		"price": 60.0
	}
]
```

### 2. Get Filters

-   **Endpoint:** `/filters`
-   **Method:** `GET`
-   **Response:**
    -   **Success (200 OK):**
        -   Returns an object that lists available filters based on the flattened product array, which may include filter categories such as brands and capacities.

#### Example Request:

```http
GET /filters
```

#### Example Response:

```json
{
	"brands": ["Chanel", "Dior", "Gucci", "YSL"],
	"capacities": ["30ml", "50ml", "100ml"]
}
```

## Middleware

-   **CORS:** The API uses the `cors` middleware to allow cross-origin requests, which enables this API to be called from different origins, improving accessibility for frontend applications or third-party services.

## Utility Functions

The API relies on several utility functions for handling data:

1. **flattenProductsArr(products):** Flattens the array of products to simplify accessing product properties.

2. **createFilterList(flattenedProducts):** Generates a filter list based on the available properties in the product data, such as brands and capacities.

3. **filterByQueryParams(products, queryParams):** Filters products based on the provided query parameters (brand, title, capacity).

4. **filterByPriceRangeQueryParams(products, priceMin, priceMax):** Filters products based on their price range defined by `priceMin` and `priceMax`.

5. **sortByQueryParam(products, sortBy):** Sorts the array of products based on a specified sorting parameter.

## Running the Application

To run the application:

1. Clone the repository.
2. Ensure Node.js is installed in your environment.
3. Install dependencies using the command:
    ```bash
    npm install
    ```
4. Start the server with:
    ```bash
    npm start
    ```
5. The server will start at `http://localhost:3000`.

**Note:** For any complex query or transformation, consider checking the utility functions outlined above for their specific implementations, as they can significantly impact the results returned from the API.

## Conclusion

This API provides thorough access to a collection of perfume products while allowing for flexible querying and filtering. The endpoints are designed to be intuitive and efficient, making it easy to retrieve specific data or a list of filters for display purposes.
