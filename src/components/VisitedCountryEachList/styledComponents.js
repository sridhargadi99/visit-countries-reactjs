import styled from 'styled-components'

export const EachList = styled.li`
  list-style-type: none;
  height: 300px;
  width: 300px;
  background-color: #1f1f2f;
  margin-right: 20px;
  margin-bottom: 20px;
`
export const CountryImage = styled.img`
  height: 75%;
  width: 100%;
`

export const CountryAndButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  height: 25%;
`
export const CountryName = styled.p`
  font-family: 'Roboto';
  font-size: 19px;
  font-weight: 500;
  color: #f1f5f9;
`

export const RemoveButton = styled.button`
  height: 40px;
  width: 100px;
  cursor: pointer;
  outline: none;
  border: 1px solid #94a3b8;
  background-color: transparent;
  border-radius: 8px;
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 500;
  color: #f1f5f9;
`
