## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT-006

### 📅 Deadline For 60 marks: 9th September, 2025 (11:59 pm ⏱️)

### 📅 Deadline For 50 marks : 13th September , 2025 (6:00 pm⏱️)

### 📅 Deadline For 30 marks: Any time after 13the September , 2025 (6:01 pm⏱️).

---
# Green Earth


## Private Repository: https://classroom.github.com/a/nVZrg5R9 

## Alternative Private Repository: https://classroom.github.com/a/KCGI14ST 

## Alternative Private Repository: https://classroom.github.com/a/JMuIYqgK 


---
🌴 API Endpoints
---
1. Get 🌴All Plants
```bash
https://openapi.programming-hero.com/api/plants
```

2. Get 🌴All categories <br/>
```bash
https://openapi.programming-hero.com/api/categories
```


3. Get 🌴plants by categories <br/>
```bash
https://openapi.programming-hero.com/api/category/${id}
```

```bash
https://openapi.programming-hero.com/api/category/1
```

4. Get 🌴Plants Detail <br/>

```bash
https://openapi.programming-hero.com/api/plant/${id}
```

```bash
https://openapi.programming-hero.com/api/plant/1
```
---




## ✅ Main Requirements 

#### 1) Navbar

- Website **logo/name** on the **left**  
- **Menu items** in the **center** 
- **Plant a Tree button** on the **right** 

#### 2) Banner 
- A **background image**  
- A **title** and **subtitle**  
- A **centered button**  

#### 3) About Campaign
- **Section heading**  
- **Image on the left**, **text on the right**  

#### 4) Our Impact Section 
- Show **3 cards** with campaign **statistics**  

#### 5) Plant a Tree Today Section & Footer
- **Form**: Name, Email, Number of Trees  
- **Footer** with copyright info 

#### 6) Responsiveness 
- Website must be **mobile responsive**  

---






#### 1) What is the difference between var, let, and const?

## Answer: var is hoisted and initialized with undefined and Can be redeclared within the same scope also can be reassigned another one is let so let is Hoisted but not initialized, leading to a "temporal dead zone" where accessing it before the declaration causes an error and cannot be redeclared in the same block scope and it is also can be reassigned and the last one is const which is like no change it cannot be redeclared or reassigned and cannot be reassigned, though the contents of objects or arrays can be modified.

#### 2) What is the difference between map(), forEach(), and filter()? 

## Answer: The map() function transforms each element of an array and returns a new array and the new array with the transformed value. The forEach() function Executes a provided function once for each array element but doesn't return anything. The last one is filter() it creates a new array with all elements that pass a given test (callback function) and the new array containing only the elements that satisfy the condition.

#### 3) What are arrow functions in ES6?

## Answer: The arrow function in ES6 provides a shorter syntax for writing functions and do not have their own 'this'. They inherit the 'this' value from the surrounding scope. like this one let addNumber = (a,b,c) => a+b+c; in this syntax no need for the function keyword and if the function body consists of a single expression, it returns that expression automatically.

#### 4) How does destructuring assignment work in ES6?

## Answer: Destructuring assignment allows me to extract values from arrays or objects and assign them to variables in a concise manner. like if i say object destructing like this let person = { name: 'namecanbeyours', age: 20 }; let { name, age } = person; 


#### 5) Explain template literals in ES6. How are they different from string concatenation?

## Answer: Template literals allow us to embed expressions within strings and provide a more readable syntax compared to string concatenation. like we can say that Template literals are a new way to work with strings introduced in ES6. They are enclosed by backticks (``) instead of single (') or double (") quotes, allowing use easier string formatting and manipulation. we can embed expressions inside a string using ${}. Another is this template literals can span multiple lines without needing escape characters also we can execute any expression inside ${} within a template literal. But in the other side String concatenation in that part we use + operator to combine the sting other like when we want multi-line String it requires using escape characters (\n) to create multi-line strings. so in the mean time i can say in short that, template literals simplify working with strings, making the code more concise, readable, and easier to maintain, especially when dealing with expressions or multi-line strings.



## ⚙️ Functionalities 

1) Category Loading 
Load Tree Categories dynamically on the left side.

2) Category Click → Tree Data 
On clicking a category: load trees of that category.

Display in a 3-column card layout.

3) Card Contents 
 Each card includes:

        - Image

        -  Name

        - Short description

        - Category

        - Price

        - Add to Cart button

4) Modal on Card Click 
Clicking a tree name on a card opens a modal with full tree details.


##  🧪 Challenges 


    1) Add to Cart 
    Clicking Add to Cart: - Adds the tree to Cart List
                          - Shows tree name 

    2) Total Calculation 
    Calculate total price of trees in cart.

    3) Remove from Cart 
    Clicking ❌ removes tree and deducts price from total.

    4) Loading Spinner
    Show spinner while data is loading.

    5) Active Button State 
    Highlight active category button when selected.



🧰 Technology Stack:
        
        HTML

        CSS (Vanilla / Tailwind / DaisyUI)

        JavaScript (Vanilla only, no frameworks)

📌 Rules
✅ At least 5 meaningful commits

❌ No dummy text or Lorem Ipsum — must use relevant content





## 🔗 Submission
- **Live Link :** YOUR_DEPLOYED_URL_HERE  
- **GitHub Private Repository:** YOUR_REPO_URL_HERE  

---