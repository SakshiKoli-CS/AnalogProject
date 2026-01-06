# Manual Testing Guide for Analogjs Project

## Setup Steps

1. **Install Dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm start
   # or
   npm run dev
   ```

3. **Verify Server is Running**:
   - Server should start on `http://localhost:5173`
   - Check terminal for any errors

---

## Testing Checklist

### 1. Main Application Pages

#### ✅ Home Page (`/`)
- **URL**: `http://localhost:5173/`
- **What to Test**:
  - Page loads without errors
  - Analog welcome component displays correctly
  - No console errors in browser DevTools

#### ✅ About Us Page (`/about-us`)
- **URL**: `http://localhost:5173/about-us`
- **What to Test**:
  - Page displays "About Us" content
  - Shows SSG (Static Site Generation) information
  - All sections render correctly (Our Story, Mission, Values, etc.)
  - Responsive design works on different screen sizes
  - **Note**: This page is prerendered at build time

#### ✅ SSR Page (`/ssr`)
- **URL**: `http://localhost:5173/ssr`
- **What to Test**:
  - Page displays "Server-Side Rendering (SSR) Test Page"
  - Shows current render time (should be different on each refresh)
  - Verify it's server-rendered: View page source - HTML should contain the rendered content
  - Check cache headers in Network tab: Should have `Cache-Control: no-store, must-revalidate`

#### ✅ CSR Page (`/csr`)
- **URL**: `http://localhost:5173/csr`
- **What to Test**:
  - **IMPORTANT**: This should redirect to `/about-us` (301 redirect via edge function)
  - Check Network tab - should see 301 redirect
  - If redirect works, test `/csr-demo` instead for CSR functionality

#### ✅ CSR Demo Page (`/csr-demo`)
- **URL**: `http://localhost:5173/csr-demo`
- **What to Test**:
  - Page displays "Client-Side Rendering (CSR) Test Page"
  - Shows render time (client-side timestamp)
  - **Interactive Counter**:
    - Click "Increment" - count should increase
    - Click "Decrement" - count should decrease
    - Click "Reset" - count should go back to 0
  - **Client-Side Data Fetch**:
    - Wait for data to load (should appear after ~1 second)
    - Click "Refresh Data" - should fetch new data
    - Verify user data displays (ID, Name, Email, Fetched time)
  - View page source - initial HTML should be minimal (CSR renders in browser)

#### ✅ ISR Page (`/isr`)
- **URL**: `http://localhost:5173/isr`
- **What to Test**:
  - Page loads correctly
  - Check Network tab - should have cache headers: `Cache-Control: public, s-maxage=40, stale-while-revalidate=60`
  - Refresh multiple times - content should be cached for 40 seconds

#### ✅ SSG Page (`/ssg`)
- **URL**: `http://localhost:5173/ssg`
- **What to Test**:
  - Page displays Static Site Generation information
  - Content is static (same on every load)
  - Fast load time

#### ✅ SSR API Page (`/ssr-api`)
- **URL**: `http://localhost:5173/ssr-api`
- **What to Test**:
  - Page loads and displays SSR API information
  - Check Network tab - should have no-cache headers
  - Verify API calls work if page makes any

#### ✅ Cache Purge Page (`/cache-purge`)
- **URL**: `http://localhost:5173/cache-purge`
- **What to Test**:
  - Page loads correctly
  - Check Network tab - should have cache headers: `Cache-Control: public, s-maxage=60, stale-while-revalidate=30`
  - Should have `Cache-Tag: cachetest` header

#### ✅ Cache Revalidate Page (`/cache-revalidate`)
- **URL**: `http://localhost:5173/cache-revalidate`
- **What to Test**:
  - Page loads correctly
  - Test cache revalidation functionality if implemented

---

### 2. Serverless Functions (API Endpoints)

These functions are typically exposed at `/api/` routes in Analogjs/Nitro.

#### ✅ Hello Function - GET Request
- **URL**: `http://localhost:5173/api/hello`
- **Method**: GET
- **What to Test**:
  - Returns JSON response with:
    - `body`: null or empty (GET has no body)
    - `query`: query parameters object
    - `cookies`: cookies object
  - Test with query params: `http://localhost:5173/api/hello?test=123&foo=bar`
  - Verify query params appear in response

#### ✅ Hello Function - POST Request
- **URL**: `http://localhost:5173/api/hello`
- **Method**: POST
- **Body**: `{"test": "data", "name": "John"}`
- **Headers**: `Content-Type: application/json`
- **What to Test**:
  - Returns JSON response with:
    - `body`: Should contain the POST data
    - `query`: query parameters (if any)
    - `cookies`: cookies object
  - Use Postman, curl, or browser fetch to test:
    ```javascript
    fetch('http://localhost:5173/api/hello', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({test: 'data', name: 'John'})
    })
    ```

#### ✅ User Function
- **URL**: `http://localhost:5173/api/user`
- **Method**: GET
- **What to Test**:
  - Returns JSON: `{"name": "Hilary", "shortName": "Hil"}`
  - Verify `shortName` is first 3 characters of name (uses `utils.js`)

#### ✅ Users Dynamic Route - Single Name
- **URL**: `http://localhost:5173/api/users/john`
- **Method**: GET
- **What to Test**:
  - Returns: `Hello john! Timestamp: [current ISO timestamp]`
  - Timestamp should be current time (different on each request)

#### ✅ Users Dynamic Route - Different Names
- **URLs to Test**:
  - `http://localhost:5173/api/users/jane`
  - `http://localhost:5173/api/users/alice`
  - `http://localhost:5173/api/users/bob`
- **What to Test**:
  - Each URL should return personalized greeting with the name from the URL
  - Timestamp should be different for each request

---

### 3. Server API Routes

#### ✅ Server API v1 Hello
- **URL**: `http://localhost:5173/api/v1/hello`
- **Method**: GET
- **What to Test**:
  - Returns JSON: `{"message": "Hello World"}`
  - This is from `src/server/routes/api/v1/hello.ts`

---

### 4. Edge Function Proxy Routes

#### ✅ Legacy Route
- **URL**: `http://localhost:5173/legacy`
- **Method**: GET
- **What to Test**:
  - Returns JSON: `{"message": "Hello from Edge Function!", "time": "[current date]"}`
  - Content-Type should be `application/json`
  - Time should be current timestamp

#### ✅ CSR Redirect (Edge Function)
- **URL**: `http://localhost:5173/csr`
- **Method**: GET
- **What to Test**:
  - Should redirect (301) to `/about-us`
  - Check Network tab - should see 301 status code
  - Final URL should be `/about-us`

---

### 5. General Testing

#### ✅ Browser Console
- Open DevTools Console (F12)
- Navigate through all pages
- **Check for**:
  - No JavaScript errors
  - No warnings (unless expected)
  - Console logs from edge function (if any)

#### ✅ Network Tab
- Open DevTools Network tab
- Navigate through pages
- **Check for**:
  - All requests return 200 (or expected status codes)
  - No failed requests (404, 500, etc.)
  - Correct Content-Type headers
  - Cache headers match expected behavior (SSR, ISR, etc.)

#### ✅ Page Source
- Right-click → View Page Source
- **For SSR pages** (`/ssr`, `/ssr-api`):
  - HTML should contain rendered content
- **For CSR pages** (`/csr-demo`):
  - Initial HTML should be minimal
  - Content renders via JavaScript

#### ✅ Responsive Design
- Test on different screen sizes:
  - Mobile (375px width)
  - Tablet (768px width)
  - Desktop (1920px width)
- Use browser DevTools responsive mode
- **Check**: Layout adapts correctly, no horizontal scrolling

#### ✅ Performance
- Use Lighthouse in Chrome DevTools
- **Check**:
  - Page load times are reasonable
  - No major performance issues
  - Good accessibility scores

---

## Quick Test Commands

You can use these commands in your terminal (with server running) or in browser console:

### Test API Endpoints with curl:

```bash
# Hello function - GET
curl http://localhost:5173/api/hello

# Hello function - POST
curl -X POST http://localhost:5173/api/hello \
  -H "Content-Type: application/json" \
  -d '{"test": "data"}'

# User function
curl http://localhost:5173/api/user

# Users dynamic route
curl http://localhost:5173/api/users/john

# Server API
curl http://localhost:5173/api/v1/hello

# Legacy edge function
curl http://localhost:5173/legacy
```

### Test in Browser Console:

```javascript
// Test Hello POST
fetch('http://localhost:5173/api/hello', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({test: 'data'})
}).then(r => r.json()).then(console.log)

// Test User
fetch('http://localhost:5173/api/user')
  .then(r => r.json()).then(console.log)

// Test Users dynamic
fetch('http://localhost:5173/api/users/jane')
  .then(r => r.text()).then(console.log)
```

---

## Expected Results Summary

| Route | Type | Expected Behavior |
|-------|------|-------------------|
| `/` | Page | Home page with Analog welcome |
| `/about-us` | Page (SSG) | About Us content, prerendered |
| `/ssr` | Page (SSR) | Server-rendered, no-cache headers |
| `/csr` | Redirect | 301 redirect to `/about-us` |
| `/csr-demo` | Page (CSR) | Client-rendered, interactive counter |
| `/isr` | Page (ISR) | Cached for 40 seconds |
| `/ssg` | Page (SSG) | Static content |
| `/ssr-api` | Page (SSR) | Server-rendered with API |
| `/cache-purge` | Page | Cached with cache-tag |
| `/cache-revalidate` | Page | Cache revalidation |
| `/api/hello` | Function | Returns body, query, cookies |
| `/api/user` | Function | Returns `{name: "Hilary", shortName: "Hil"}` |
| `/api/users/[name]` | Function | Returns greeting with name and timestamp |
| `/api/v1/hello` | Server Route | Returns `{message: "Hello World"}` |
| `/legacy` | Edge Function | Returns JSON with message and time |

---

## Troubleshooting

- **Server won't start**: Check if port 5173 is already in use
- **404 errors**: Verify server is running and routes are correct
- **Functions not working**: Check browser console and server terminal for errors
- **Redirect not working**: Verify edge function is properly configured
- **Cache not working**: Check Network tab headers match expected values

---

## Notes

- All functions in `functions/` directory are automatically exposed as API routes
- Edge functions (`.edge.js`) run at the edge and can intercept requests
- SSR pages are rendered on each request (unless cached)
- SSG pages are prerendered at build time
- CSR pages render entirely in the browser
- ISR pages regenerate periodically based on cache settings

