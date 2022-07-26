import styled from 'styled-components'

export const TrendItem = styled.li`
  border: 3px solid green;
  margin: 5px;
  display: flex;

  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 30px;
  }
`
export const ImgDiv = styled.div`
  border: 1px solid red;
  display: flex;
  height: 100%;
  width: 100%;
`
export const TrendImg = styled.img`
  width: 100%;
  height: 200px;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
export const TrendInfo = styled.div`
  border: 2px solid red;

  display: flex;
  flex-direction: row;
  @media screen and (min-width: 768px) {
    height: 100%;
    width: 100%;
  }
`
export const TrendProfileImg = styled.img`
  width: 50px;
  height: 50px;
`
export const TrendInfoTextContainer = styled.div`
  border: 1px solid pink;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`
export const TrendTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  margin-top: 0px;
  line-height: 1.7;
  color: ${props => (props.TrTitle ? '#212121' : '#fff')};
`
export const TrendName = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #94a3b8;
`

export const TrendViewsCountContainer = styled.div`
  display: flex;

  border: 1px solid red;
  margin-left: 0px;
`
