import styled from 'styled-components'

export const NavContainer = styled.nav`
  border: 1px solid red;
  background-color: ${props => (props.backColor ? '#fff' : '#231f20')};
  padding: 10px;
`
export const ResponsiveContainer = styled.div`
  border: 1px solid green;
  padding: 12px;
`
export const LogoImage = styled.img`
  width: 100px;
  height: 30px;
`
export const MobileNavContainer = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const IconsContainer = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const ButtonElement = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`
export const DesktopContainer = styled.div` 
  display:flex; 
  justify-content:space-between; 
  align-items:center;
  @media screen and (max-width:767px){
      display:none; 
      border:1px solid green;
  }
 }
`
export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 16px;
  margin-right: 16px;
`
export const LogoutButton = styled.button`
  color: #3b82f6;
  background-color: transparent;
  color: ${props => (props.logBtn ? '#3b82f6' : '#fff')};
  border: 1px solid ${props => (props.logBtn ? '#3b82f6' : '#fff')};
  border-radius: 4px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 18px;
`
export const PopupContainer = styled.div`
  border: 2px solid red;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 200px;
  width: 400px;
  background-color: #cbd5e1;
  border-radius: 10px;
`

export const AlignRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const AlignColumn = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #cbd5e1;
  border-radius: 10px;
  padding: 20px;
`

export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border: 1px solid grey;
  padding: 13px;
  padding-right: 20px;
  padding-left: 20px;
  color: grey;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 15px;
`
export const ModalDesc = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  margin: 10px;
  color: black;
`
export const ConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  color: white;
  padding: 15px;
  padding-right: 20px;
  padding-left: 20px;
  border: none;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 15px;
`
