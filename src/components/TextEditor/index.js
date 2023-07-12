import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  BgContainer,
  TextEditorContainer,
  Div1,
  Heading,
  TextEditorImage,
  Div2,
  IconsContainerList,
  ListItem,
  ItalicButton,
  BoldButton,
  UnderlineButton,
  Line,
  TextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    boldButtonActive: false,
    italicButtonActive: false,
    underlineButtonActive: false,
  }

  onClickBoldButton = () => {
    this.setState(prevState => ({
      boldButtonActive: !prevState.boldButtonActive,
    }))
  }

  onClickItalicButton = () => {
    this.setState(prevState => ({
      italicButtonActive: !prevState.italicButtonActive,
    }))
  }

  onClickUnderlineButton = () => {
    this.setState(prevState => ({
      underlineButtonActive: !prevState.underlineButtonActive,
    }))
  }

  render() {
    const {
      boldButtonActive,
      italicButtonActive,
      underlineButtonActive,
    } = this.state
    return (
      <BgContainer>
        <TextEditorContainer>
          <Div1>
            <Heading>Text Editor</Heading>
            <TextEditorImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </Div1>
          <Div2>
            <IconsContainerList>
              <ListItem>
                <BoldButton
                  type="button"
                  isActive={boldButtonActive}
                  onClick={this.onClickBoldButton}
                  data-testid="bold"
                >
                  <VscBold size={25} />
                </BoldButton>
              </ListItem>
              <ListItem>
                <ItalicButton
                  type="button"
                  isActive={italicButtonActive}
                  onClick={this.onClickItalicButton}
                  data-testid="italic"
                >
                  <GoItalic size={25} />
                </ItalicButton>
              </ListItem>
              <ListItem>
                <UnderlineButton
                  type="button"
                  isActive={underlineButtonActive}
                  onClick={this.onClickUnderlineButton}
                  data-testid="underline"
                >
                  <AiOutlineUnderline size={25} />
                </UnderlineButton>
              </ListItem>
            </IconsContainerList>
            <Line />
            <TextArea
              rows="25"
              cols="54"
              bold={boldButtonActive}
              italic={italicButtonActive}
              underline={underlineButtonActive}
            />
          </Div2>
        </TextEditorContainer>
      </BgContainer>
    )
  }
}

export default TextEditor
