import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: #161624;
  padding: 40px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 27px;
  font-weight: 700;
  color: #ffffff;
`
export const CountriesList = styled.ul`
  display: flex;
  flex-direction: column;
  height: 300px;
  border-radius: 8px;
  padding-left: 0px;
  border: 1px solid #334155;
  overflow-y: scroll;
`
export const VisitedCountriesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
`
export const NoCountriesFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
`
export const Content = styled.p`
  font-family: 'Roboto';
  font-size: 27px;
  font-weight: 700;
  color: #ffffff;
`
