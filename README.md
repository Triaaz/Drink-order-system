# Drink Order System (CLI)

Simple Node.js terminal app for taking drink orders and calculating totals.

---

## What I built

Menu shows drinks with prices. User picks drink + quantity, system stores order and prints a final bill.

Nothing complex — just arrays, loops, and basic validation.

---

## What broke / what I struggled with

### 1. Duplicate orders
Same drink was getting added multiple times instead of updating.

I first didn’t think about checking existing items.

Fix was using:
- `.find()` to detect existing drink
- then increase quantity instead of pushing again

---

### 2. Totals logic was messy
At first I was storing `total` inside each order and updating it every time.

Problem: it becomes unreliable if price logic changes.

So I stopped storing totals and calculated everything at the end instead.

---

### 3. Input validation was weak
User could enter nonsense (letters for quantity, negatives, etc).

I fixed it by forcing:
- `Number()`
- checking `isNaN`
- blocking <= 0 values

---

### 4. Two arrays for menu (drinks + prices)
This works but it’s fragile because index must match.

If I refactor this later, I’ll use objects instead.

---

## Thinking vs Implementation gap

I understood most of the logic in my head while building this, but translating that into clean and structured code took time.

The main issue was not the concepts, but organizing the logic clearly while writing it out.

Over time, I improved by breaking problems into smaller steps before coding instead of trying to write everything at once.

---

## How to run

npm install  
node orderSystem.js

---

## What I’d improve next
- Use object-based menu instead of two arrays
- Add better CLI UI (clearer prompts, spacing)
- Possibly convert to Express API later