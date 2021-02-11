- This project was created with React Native
- Inspired by Academind @ https://github.com/Code4Blessings/rn-Guess-A-Number.git

## React-Native/React Snippets
- *irmc* - import for React
- *irnc* - import for React-Native
- *rncslwc* - complete react-native skeleton
- *rnss* - stylesheet section

## View
- Operates just like a div in React.js
- Has a built-in flexbox with a default of flex-direction: column

## Shadow Properties
- Only works on IOS. To fix this, we add an elevation property.

## Card.js File

#### "props.children"
- Special prop in React which is basically the content you pass between the opening and closing tags.

Example:

```
        <View>
            <Text>Select A Number</Text>
            <TextInput />
            <View style={styles.buttonContainer}>
                <Button title='Reset' onPress={() => {}} />
                <Button  title='Confirm' onPress={() => {}} /> 
            </View>
        </View>

```
    All the content between the parent View tag are the 'children'

    -So therefore if we import the Card.js component into whatever file we need it to be in, we can wrap the content (children) with the Card component like so:

```
     <Card>
        <Text>Select A Number</Text>
         <TextInput />
         <View style={styles.buttonContainer}>
            Button title='Reset' onPress={() => {}} />
            Button  title='Confirm' onPress={() => {}} /> 
        </View>
    </Card>
```

#### "<View style={{...styles.card, ...props.style}}>"
- What this code does is it makes the code more flexible and reusable.  The spread operator uses all the styles properties but the props.style piece enables you to overwrite the measurements.

For example:

```
    In the stylesheet you have
        alignItems: 'center',
        shadowColor: 'black'
    
    The props.style with the spread operator will enable you to change the measurements like so:
        alignItems: 'stretch',
        shadowColor: 'grey'

```

### Issues
- Input component styles don't seem to be reusable with the use of the spread operator.


