import React, { useState } from 'react';
import { DropdownButton, DropdownContent, DropdownContainer, ListItem } from './DropBox.Styled'

const DropBox = ({options} : any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (value : any) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        {selectedOption || 'Select an option'}
      </DropdownButton>
      <DropdownContent open={isOpen}>
        {options.map((option : any) => (
          <ListItem key={option.value} onClick={() => handleOptionClick(option.value)}>
            {option.label}
          </ListItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default DropBox;