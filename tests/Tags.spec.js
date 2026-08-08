import {test, expect}from'playwright/test'

test('Test1@Midun', async({page})=>{
    console.log("This is Test case 1.")
})

test('Test2@Sumiya', async({page})=>{
    console.log("This is Test case 2.")
})

test('Test3@Midun', async({page})=>{
    console.log("This is Test case 3.")
})

test('Test4@Sumiya', async({page})=>{
    console.log("This is Test case 4.")
})

test('Test5@Midun@Sumiya', async({page})=>{
    console.log("This is Test case 5.")
})