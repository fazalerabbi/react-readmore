# ReactReadMore Component

The `ReactReadMore` component is a React functional component that is designed to display a block of text with a "Read More" or "Read Less" toggle. This component is useful for situations where you want to limit the amount of text initially displayed to the user, such as in a blog post preview or a product description.

## Props

The component accepts several props:

- `content` (string): The text content to be displayed.
- `dangerouslySetInnerHTML` (boolean, optional): A boolean indicating whether the content should be inserted as raw HTML. Default is `false`.
- `classes` (string, optional): Additional CSS classes to be applied to the text container.
- `styles` (Object, optional): Additional inline styles to be applied to the text container.
- `numberOfLinesClamp` (number, optional): The maximum number of lines of text to be displayed when the component is not expanded. Default is `3`.
- `buttonClass` (Object, optional): Additional class to be applied to the "Read More" button.

## Usage

Here's an example of how to use the `ReactReadMore` component:

```jsx
import ReactReadMore from "@fazalerabbi/react-readmore";

function App() {
  return (
    <div className="App">
      <ReactReadMore
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ultrices massa, et feugiat ipsum consequat id. Donec lacinia risus ac neque ullamcorper, a finibus arcu pretium."
        numberOfLinesClamp={2}
      />
    </div>
  );
}

export default App;
```
