# Inspector Tool Documentation

## Overview

The Inspector Tool is a web-based utility designed to identify whether elements on a webpage are uniquely identifiable. When hovering over an element, the tool checks its uniqueness and visually indicates the result with a bounding box. On clicking an element, it returns detailed data about the target element.

## Features

- **Hover Detection**: On hovering over an element, the tool checks if the element is uniquely identifiable.
  - **Red Bounding Box**: Indicates the element is not uniquely identifiable.
  - **Blue Bounding Box**: Indicates the element is uniquely identifiable.
- **Element Data Retrieval**: On clicking an element, the tool returns an object containing detailed information about the target element.

## Usage

1. **Hover Over Elements**: Move your cursor over any element on the webpage.
   - If the element is uniquely identifiable, a blue bounding box will appear around it.
   - If the element is not uniquely identifiable, a red bounding box will appear around it.

2. **Click to Retrieve Data**: Click on any element to retrieve its data. The tool will return an object with the following structure:

```typescript
type ElementData = {
  tag: string;
  attributes: Record<string, string>;
  selector: string | null | undefined;
  htmlBox: DOMRect;
  element: HTMLElement;
  success: boolean;
};
```

### ElementData Object

- **tag**: The tag name of the element (e.g., `div`, `span`).
- **attributes**: A record of the element's attributes and their values.
- **selector**: The CSS selector for the element, if available.
- **htmlBox**: The bounding box of the element in the DOM, represented as a `DOMRect` object.
- **element**: The actual `HTMLElement` object.
- **success**: A boolean indicating whether the element is uniquely identifiable (`true`) or not (`false`).

## Example

```Typescript
// Example of using the inspector tool
 const handleMouseClick = (e: MouseEvent, data: ElementData) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(data);
  };
  
  const inspector = useRef(new Inspector({ onElementClick: handleMouseClick })).current;

<button
  className="btn"
  onClick={() => {
    inspector.startCapturing();
  }}
  >
  Start
</button>
<button
  className="btn"
  onClick={() => {
    inspector.stopCapturing();
  }}
  >
  Stop
</button>
```
![image](https://github.com/user-attachments/assets/491ae8fd-751b-4230-8614-508e603b1eb7)
![image](https://github.com/user-attachments/assets/b230af63-65d7-4655-812b-e99950dfc243)
![image](https://github.com/user-attachments/assets/f8efcb18-4bb4-4b95-b88b-5d8ee96400c7)




## Conclusion

The Inspector Tool is a powerful utility to quickly and easily identify unique elements on a webpage. By providing visual feedback and detailed element data, it simplifies the process of debugging and optimizing web pages.
