import {
  EachList,
  CountryImage,
  CountryAndButtonContainer,
  CountryName,
  RemoveButton,
} from './styledComponents'

const VisitedCountryEachList = props => {
  const {eachList, changeActiveState} = props
  const {id, imageUrl, name} = eachList
  const onChangeState = () => changeActiveState(id)
  return (
    <EachList>
      <CountryImage src={imageUrl} alt="thumbnail" />
      <CountryAndButtonContainer>
        <CountryName>{name}</CountryName>
        <RemoveButton type="button" onClick={onChangeState}>
          Remove
        </RemoveButton>
      </CountryAndButtonContainer>
    </EachList>
  )
}

export default VisitedCountryEachList
