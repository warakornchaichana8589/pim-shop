"use client";

import React from "react";
import styled from "styled-components";
import { ProductOption, OptionValue } from "@/types/product-options";

// ============================================================
// Dynamic Option Renderer
// Component ที่ render options ตาม type ที่กำหนด
// ============================================================

interface DynamicOptionProps {
  option: ProductOption;
  selectedValue: string | undefined;
  onChange: (optionId: string, valueId: string) => void;
}

export function DynamicOption({ option, selectedValue, onChange }: DynamicOptionProps) {
  switch (option.type) {
    case "color":
      return (
        <ColorOption
          option={option}
          selectedValue={selectedValue}
          onChange={onChange}
        />
      );
    case "size":
    case "radio":
      return (
        <ButtonOption
          option={option}
          selectedValue={selectedValue}
          onChange={onChange}
        />
      );
    case "select":
      return (
        <SelectOption
          option={option}
          selectedValue={selectedValue}
          onChange={onChange}
        />
      );
    case "text":
      return (
        <TextOption
          option={option}
          selectedValue={selectedValue}
          onChange={onChange}
        />
      );
    case "number":
      return (
        <NumberOption
          option={option}
          selectedValue={selectedValue}
          onChange={onChange}
        />
      );
    default:
      return null;
  }
}

// ============================================================
// Color Option (Swatches)
// ============================================================

function ColorOption({ option, selectedValue, onChange }: DynamicOptionProps) {
  const selectedLabel = option.values.find((v) => v.id === selectedValue)?.label;
  
  return (
    <OptionSection>
      <OptionLabel>
        {option.name}: <OptionLabelValue>{selectedLabel || "เลือก" + option.name}</OptionLabelValue>
        {option.required && <RequiredMark>*</RequiredMark>}
      </OptionLabel>
      <OptionRow>
        {option.values.map((value) => (
          <ColorSwatch
            key={value.id}
            $color={value.colorCode || "#ccc"}
            $active={selectedValue === value.id}
            $disabled={value.disabled}
            onClick={() => !value.disabled && onChange(option.id, value.id)}
            title={value.label}
          >
            {value.disabled && <DisabledLine />}
          </ColorSwatch>
        ))}
      </OptionRow>
    </OptionSection>
  );
}

// ============================================================
// Button Option (Size, Radio)
// ============================================================

function ButtonOption({ option, selectedValue, onChange }: DynamicOptionProps) {
  const selectedLabel = option.values.find((v) => v.id === selectedValue)?.label;
  
  return (
    <OptionSection>
      <OptionLabel>
        {option.name}: <OptionLabelValue>{selectedLabel || "เลือก" + option.name}</OptionLabelValue>
        {option.required && <RequiredMark>*</RequiredMark>}
      </OptionLabel>
      <OptionRow>
        {option.values.map((value) => (
          <OptionButton
            key={value.id}
            $active={selectedValue === value.id}
            $disabled={value.disabled}
            onClick={() => !value.disabled && onChange(option.id, value.id)}
          >
            {value.label}
            {value.priceModifier && value.priceModifier !== 0 && (
              <PriceModifier>
                {value.priceModifier > 0 ? "+" : ""}
                {value.priceModifier}
              </PriceModifier>
            )}
            {value.disabled && <StockBadge>หมด</StockBadge>}
          </OptionButton>
        ))}
      </OptionRow>
    </OptionSection>
  );
}

// ============================================================
// Select Option (Dropdown)
// ============================================================

function SelectOption({ option, selectedValue, onChange }: DynamicOptionProps) {
  return (
    <OptionSection>
      <OptionLabel>
        {option.name}
        {option.required && <RequiredMark>*</RequiredMark>}
      </OptionLabel>
      <StyledSelect
        value={selectedValue || ""}
        onChange={(e) => onChange(option.id, e.target.value)}
      >
        <option value="" disabled>
          เลือก{option.name}
        </option>
        {option.values.map((value) => (
          <option key={value.id} value={value.id} disabled={value.disabled}>
            {value.label}
            {value.priceModifier && value.priceModifier !== 0
              ? ` (${value.priceModifier > 0 ? "+" : ""}${value.priceModifier})`
              : ""}
            {value.disabled ? " - หมด" : ""}
          </option>
        ))}
      </StyledSelect>
    </OptionSection>
  );
}

// ============================================================
// Text Option (Input)
// ============================================================

function TextOption({ option, selectedValue, onChange }: DynamicOptionProps) {
  return (
    <OptionSection>
      <OptionLabel>
        {option.name}
        {option.required && <RequiredMark>*</RequiredMark>}
      </OptionLabel>
      <StyledInput
        type="text"
        placeholder={`กรอก${option.name}`}
        value={selectedValue || ""}
        onChange={(e) => onChange(option.id, e.target.value)}
      />
    </OptionSection>
  );
}

// ============================================================
// Number Option (Number Input)
// ============================================================

function NumberOption({ option, selectedValue, onChange }: DynamicOptionProps) {
  return (
    <OptionSection>
      <OptionLabel>
        {option.name}
        {option.required && <RequiredMark>*</RequiredMark>}
      </OptionLabel>
      <StyledInput
        type="number"
        min="1"
        placeholder={`กรอก${option.name}`}
        value={selectedValue || ""}
        onChange={(e) => onChange(option.id, e.target.value)}
      />
    </OptionSection>
  );
}

// ============================================================
// Styled Components
// ============================================================

const OptionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const OptionLabel = styled.span`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #09090b;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const OptionLabelValue = styled.span`
  font-weight: 400;
  color: #71717a;
  text-transform: none;
`;

const RequiredMark = styled.span`
  color: #E60012;
`;

const OptionRow = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

// Color Swatch
const ColorSwatch = styled.button<{ $color: string; $active?: boolean; $disabled?: boolean }>`
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
  border: 2px solid ${(props) => (props.$active ? "#09090b" : "transparent")};
  outline: 2px solid ${(props) => (props.$active ? "#ffffff" : "transparent")};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover:not(:disabled) {
    transform: ${(props) => (props.$disabled ? "none" : "scale(1.1)")};
  }

  /* Border for light colors */
  ${(props) =>
    props.$color.toLowerCase() === "#ffffff" &&
    `box-shadow: inset 0 0 0 1px #e4e4e7;`}
`;

const DisabledLine = styled.div`
  position: absolute;
  top: 50%;
  left: -10%;
  width: 120%;
  height: 2px;
  background-color: #E60012;
  transform: rotate(-45deg);
`;

// Button Option
const OptionButton = styled.button<{ $active?: boolean; $disabled?: boolean }>`
  position: relative;
  min-width: 48px;
  height: 48px;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.125rem;
  background-color: ${(props) => (props.$active ? "#09090b" : "#ffffff")};
  color: ${(props) => (props.$active ? "#ffffff" : "#09090b")};
  border: 1px solid ${(props) => (props.$active ? "#09090b" : "#e4e4e7")};
  font-size: 12px;
  font-weight: 700;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.$disabled ? 0.4 : 1)};
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    border-color: #09090b;
    background-color: ${(props) => (props.$active ? "#09090b" : "#fafafa")};
  }
`;

const PriceModifier = styled.span`
  font-size: 9px;
  font-weight: 600;
  color: #71717a;
`;

const StockBadge = styled.span`
  position: absolute;
  top: 2px;
  right: 2px;
  font-size: 8px;
  font-weight: 700;
  color: #E60012;
`;

// Select
const StyledSelect = styled.select`
  width: 100%;
  height: 48px;
  padding: 0 1rem;
  background-color: #ffffff;
  border: 1px solid #e4e4e7;
  font-size: 14px;
  font-weight: 500;
  color: #09090b;
  cursor: pointer;
  transition: border-color 0.3s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2309090b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;

  &:focus {
    outline: none;
    border-color: #09090b;
  }
`;

// Input
const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 1rem;
  background-color: #ffffff;
  border: 1px solid #e4e4e7;
  font-size: 14px;
  font-weight: 500;
  color: #09090b;
  transition: border-color 0.3s ease;

  &::placeholder {
    color: #a1a1aa;
  }

  &:focus {
    outline: none;
    border-color: #09090b;
  }
`;

export default DynamicOption;
