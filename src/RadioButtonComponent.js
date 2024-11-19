import { useState } from "react"

const RadioButtonComponent = () => {
  const [selectedValue, setSelectedValue] = useState("keung");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  }

  const albums = [
    {
      value: "keung",
      text: "킁"
    },
    {
      value: "beige",
      text: "베이지"
    },
    {
      value: "language",
      text: "랭귀지"
    },
    {
      value: "detox",
      text: "디톡스"
    }
  ]

  return (
    <>
      <label htmlFor={albums[0].value}>
        <input
          type="radio"
          name="album"
          id={albums[0].value}
          value={albums[0].value}
          onChange={handleChange} />
        {albums[0].text}
      </label>
      <br />
      <label htmlFor={albums[1].value}>
        <input
          type="radio"
          name="album"
          id={albums[1].value}
          value={albums[1].value}
          onChange={handleChange} />
        {albums[1].text}
      </label>
      <br />
      <label htmlFor={albums[2].value}>
        <input
          type="radio"
          name="album"
          id={albums[2].value}
          value={albums[2].value}
          onChange={handleChange} />
        {albums[2].text}
      </label>
      <br />
      <label htmlFor={albums[3].value}>
        <input
          type="radio"
          name="album"
          id={albums[3].value}
          value={albums[3].value}
          onChange={handleChange} />
        {albums[3].text}
      </label>

      <h3>선택된 과일 : {selectedValue}</h3>
    </>
  );
}

export default RadioButtonComponent;