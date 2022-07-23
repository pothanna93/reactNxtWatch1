import styled from 'styled-components'

export const TrendItem = styled.li`
  border: 2px solid red;
  list-style-type: none;
  margin: 5px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 30px;
  }
`
export const TrendImg = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const TrendInfo = styled.div`
  border: 1px solid yellow;
  display: flex;
  justify-content: flex-start;
  margin-top: 8px;
  @media screen and (min-width: 768px) {
    margin-top: 0px;
    width: 50%;
    margin-left: 10px;
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
  font-size: 24px;
  margin-top: 0px;
  line-height: 1.7;
`
export const TrendName = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
`

export const TrendViewsCountContainer = styled.div`
  display: flex;

  border: 1px solid red;
  margin-left: 0px;
`
