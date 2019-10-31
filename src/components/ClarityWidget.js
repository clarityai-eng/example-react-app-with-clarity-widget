import widget from '@clarity-ai/widget';
import React from 'react';

class ClarityWidget extends React.Component {
  constructor(props) {
    super(props);
    // Widget JS is loaded only once even if "load" is being called more than once.
    widget.load('https://go.dev.clarity.ai');
    this.containerRef = React.createRef();
  }

  updateWidget() {
    // Call widget.refresh with the DOM element to which the widget should be attached
    // Or call without arguments to attach to any div that matches selector [data-clarity-widget] (document wise!)
    widget.refresh(this.containerRef.current);
  }

  componentDidMount() {
    this.updateWidget();
  }

  componentDidUpdate() {
    this.updateWidget();
  }

  render() {
    return <div
      data-clarity-widget
      data-fund={this.props.fund}
      data-token=""
      data-lang="en"
      data-custom-css="//example.com/test.css"
      ref={this.containerRef}
    >
    </div>;
  }
}

export default ClarityWidget;
