import { useState, useEffect } from 'react';
import { Container, Selector } from './styles';
import { tagColorsSchema } from '../../schemas/tagColorsSchema';

export default function TagsSelector({ handleChange, selecteds }) {
  const [options, setOptions] = useState([]);

  const initialOptions = () => {
    return Object.entries(tagColorsSchema).map(([tagName, tagData]) => ({
      tagName: tagName,
      ...tagData,
      isSelected: false,
    }));
  };

  const handleSelectTags = ({ tagName }) => {
    const edited = options.map((item) =>
      item.tagName === tagName
        ? { ...item, isSelected: !item.isSelected }
        : item
    );
    setOptions(edited);
    const selectedTags = edited
      .filter((tag) => !!tag.isSelected)
      .map((tag) => tag.tagName);
    handleChange(selectedTags);
  };

  useEffect(() => {
    const test = initialOptions().map((option) =>
      selecteds.includes(option.tagName)
        ? { ...option, isSelected: true }
        : option
    );
    setOptions(test);
  }, [selecteds]);

  return (
    <Container>
      {options.map(({ tagName, isSelected, color, background }) => {
        return (
          <Selector
            key={tagName}
            onClick={() => handleSelectTags({ tagName: tagName })}
            isSelected={isSelected}
            color={color}
            background={background}
          >
            {tagName}
          </Selector>
        );
      })}
    </Container>
  );
}
