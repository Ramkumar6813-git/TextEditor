import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  background-color: #25262c;
`
export const TextEditorContainer = styled.div`
  background-color: #1b1c22;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 90vh;
  padding: 10px;
  border-radius: 8px;
  @media (min-width: 768px) {
    flex-direction: row;
    height: 80vh;
  }
`

export const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 50%;
  }
`
export const Heading = styled.h1`
  font-size: 28px;
  color: #f8fafc;
  @media (min-width: 768px) {
    margin-top: 30px;
  }
`
export const TextEditorImage = styled.img`
  width: 200px;
  margin: 50px 0px;
  @media (min-width: 768px) {
    margin: 70px 0px;
    width: 280px;
  }
`

export const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #25262c;
  border: 1px solid #334155;
  border-radius: 10px;
  @media (min-width: 768px) {
    width: 50%;
    height: 100%;
  }
`

export const IconsContainerList = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 10px 15px;
  border-bottom: 1px solid #334155;
  margin: 0;
`
export const ListItem = styled.li`
  padding: 0;
`

export const BoldButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
`
export const ItalicButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
`
export const UnderlineButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
`

export const TextArea = styled.textarea`
  padding: 20px;
  font-size: 20px;
  background-color: transparent;
  color: #f8fafc;
  outline: none;
  border: none;
  font-size: 16px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
`
