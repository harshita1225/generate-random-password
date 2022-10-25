# Password Generator

## Link

- Live Site URL: [https://harshita1225.github.io/generate-random-password/](https://harshita1225.github.io/generate-random-password/)

## Description:

- This app generates passwords.

- There is a Generate Password button which the user can click to show a new password using all letters and different characters.

- By default, the password generated should use mixed cases (both lowercase and uppercase).

Created password generator WebApp with the following instructions:

1. Use the constant "charset" in your function (move it there). It contains all characters to use.

```javascript
const charset = "abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_";
```

2. function should have 2 arguments:

   - length (Number) The length of the password
   - mixedCase (Boolean) Whether or not to use mixed cases (lowercase + uppercase)

3. If the second argument is true, use uppercase for every third character.
4. Use the function `getRandomInt()` to generate random numbers where you need them.
5. Register an onClick event for the button to generate a new password.
6. Update the generated password inside of the "output" element.
7. Generate the first password as soon as the page is loaded, using a default length of 20.

Examples for generated passwords: - 876FocMkcCv98teXc(Ov - %lfXcrLt-#ke3r6R5§-? - Nd1Z\$yRx

## challenges

1. Add an input field to define the length of the password.

2. Add a checkbox to define if the password should use mixed cases.

3. Generate a new password on change of the input elements.

## screenshot

- password mixed
  ![Demo with mixed char](./Screenshot%20from%202022-10-25%2022-34-33.png)

  - password non mixed type
    ![Demo without mixed char](./Screenshot%20from%202022-10-25%2022-36-20.png)

## Author

- Website - [Harshita Joshi-Github](https://github.com/harshita1225)
