import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #25262c;
  min-height: 100vh;
`
export const TextEditorContainer = styled.div`
  display: flex;
  width: 80vw;
  height: 90vh;
  background-color: #334155;
`

export const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 45%;
  padding: 20px;
`
export const Heading = styled.h1`
  font-size: 28px;
  color: #f8fafc;
  margin-top: 10%;
  margin-bottom: 8%;
`
export const TextEditorImage = styled.img`
  width: 100%;
`

export const Div2 = styled.div`
  margin: 10px;
  background-color: #25262c;
  width: 55%;
  border: 1px solid #334155;
  border-radius: 8px;
`

export const IconsContainerList = styled.ul`
  list-style-type: none;
  margin-top: 10px;
  margin-bottom: 5px;
  padding-left: 20px;
  display: flex;
  align-items: center;
`
export const ListItem = styled.li`
  margin-right: 5px;
`

export const BoldButton = styled.button`
  background-color: transparent;
  border: none;
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
export const Line = styled.hr`
  border: 1px solid #334155;
  margin-bottom: 0px;
`
export const TextArea = styled.textarea`
  background-color: transparent;
  color: #f8fafc;
  outline: none;
  border: none;
  font-size: 16px;
  margin: 10px;
  padding: 5px 10px 5px 10px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
`
