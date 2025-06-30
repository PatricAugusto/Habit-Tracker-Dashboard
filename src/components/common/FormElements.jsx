// src/components/common/FormElements.jsx
import styled from 'styled-components';

export const Input = styled.input`
  width: calc(100% - 20px);
  padding: 12px 10px;
  border: 1px solid #00ffff;
  border-radius: 5px;
  background-color: #0d1117;
  color: #e0e0e0;
  font-size: 1em;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #00ff00;
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.6);
  }

  &::placeholder {
    color: #777;
  }
`;

export const Button = styled.button`
  background-color: #00ffff;
  color: #0d1117;
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  font-size: 1.1em;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    background-color: #00ff00;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 0, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;