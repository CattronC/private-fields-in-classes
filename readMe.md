# Instructions 
Read about private fields in classes here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields

## Cloning the repository to your local machine
Follow these instructions or watch this [video](https://youtu.be/HK0JvGrttJ0) to setup
1. Once the repository has been created, click on the green "Code" button. 
2. Then click "Open with GitHub Desktop"
3. GitHub desktop will open -> In Github desktop, click "Clone". 
4. In Github desktop, click "Open in Visual Studio Code".
5. In Visual Studio Code, open the terminal and run `npm install`. Because this project is dependent upon a testing framework, you will need to install the dependencies before you can run the tests.
6. In the terminal, try running the tests by running `npm test`. You should see a failing test.

## Complete the following steps to make the tests pass:
Be sure to read the failing tests by running `npm test` to understand what is being asked of you. Run the tests after each step to make sure you are on the right track.

1. In your Person class, introduce a private field named #id that gets a random value when an object is instantiated.
2. Create a getter method to retrieve this ID value.
3. Instantiate a Person object and try accessing the ID directly and via the getter. Document your observations.
