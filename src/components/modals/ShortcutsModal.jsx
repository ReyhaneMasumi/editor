import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'
import Modal from './Modal'


class ShortcutsModal extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onOpenToggle: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
  }

  render() {
    const help = [
      {
        key: "?",
        text: "Shortcuts menu"
      },
      {
        key: "o",
        text: "Open modal"
      },
      {
        key: "e",
        text: "Export modal"
      },
      {
        key: "s",
        text: "Sources modal"
      },
      {
        key: "p",
        text: "Style settings modal"
      },
      {
        key: "i",
        text: "Toggle inspect"
      },
      {
        key: "m",
        text: "Focus map"
      },
    ]


    return <Modal
      data-wd-key="shortcuts-modal"
      isOpen={this.props.isOpen}
      onOpenToggle={this.props.onOpenToggle}
      title={'Shortcuts'}
    >
      <div className="maputnik-modal-section maputnik-modal-shortcuts">
        <p>
          Press <code>ESC</code> to lose focus of any active elements, then press one of:
        </p>
        <ul>
          {help.map((item) => {
            return <li>
              <code>{item.key}</code> {item.text}
            </li>
          })}
        </ul>
      </div>
    </Modal>
  }
}

export default ShortcutsModal
