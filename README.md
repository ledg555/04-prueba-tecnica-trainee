# Technical test for React Juniors and Trainees

## Description

Retrieve a random fact about cats and show a cat image with the first five words of the fact.

### APIs

- Random cat facts: https://catfact.ninja/fact
- Random cat images: https://cataas.com/cat/says/hello

## Implementation
In this technical test I set up two custom hooks, one for each endpoint, to manage their respective state and queries. This ensured keeping the logic separated from the structure and delegating only one task to each component and function.

I also added a button to retrive new random facts with their respective random image, and used  an E2E test with Playwright to ensure the app's core functionality was working as expected.

## Technologies
* Languages: HTML, CSS, JavaScript
* Frameworks: React
* Testing: Playwright
