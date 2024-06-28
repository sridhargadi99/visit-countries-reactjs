import {EachList, CountryName, Button, ButtonContent} from './styledComponents'

const CountryEachList = props => {
  const {eachList, changeActiveState} = props
  const {id, name, isVisited} = eachList
  const onChangeState = () => changeActiveState(id)
  return (
    <EachList>
      <CountryName>{name}</CountryName>
      {isVisited ? (
        <ButtonContent onClick={onChangeState}>Visited</ButtonContent>
      ) : (
        <Button type="button" onClick={onChangeState}>
          Visit
        </Button>
      )}
    </EachList>
  )
}

export default CountryEachList
