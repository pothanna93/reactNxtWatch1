import styled from 'styled-components'

export const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: ${props => (props.back ? '#212121' : '#ffffff')};
`
export const ResponseContainer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 16px;
  background-color: ${props => (props.backColor ? ' #0f0f0f' : '#ffffff')};
  @media screen and (min-width: 768px) {
    max-width: 680px;
    width: 100%;
  }
`
export const LogoImage = styled.img`
  width: 160px;
  margin-top: 20px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 20px;
  padding: 20px;
`
export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  margin-bottom: 10px;
`
export const LabelElement = styled.label`
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.userName ? '#ffffff' : '#475569')};
  margin-bottom: 8px;
`
export const InputElement = styled.input`
  height: 42px;
  border: 1px solid #475569;
  padding: 10px;
  border-radius: 4px;
  outline: none;
  background-color: transparent;
  font-size: 15px;
  color: ${props => (props.textColor ? '#ffffff' : '#000000')};
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
export const InputCheckbox = styled.input`
  height: 20px;
  width: 16px;
`
export const LabelCheckBox = styled.label`
  font-family: 'Roboto';
  margin-left: 6px;
  font-size: 16px;
  color: ${props => (props.showPassword ? '#ffffff' : '#000000')};
  font-weight: 500;
`
export const ButtonElement = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  padding-top: 14px;
  padding-bottom: 14px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  font-size: 16px;
`
export const ErrorMsg = styled.p`
  color: #ff0000;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 17px;
`
