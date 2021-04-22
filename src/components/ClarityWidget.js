import widget from '@clarity-ai/widget';
import React from 'react';

class ClarityWidget extends React.Component {
  constructor(props) {
    super(props);
    // Widget JS is loaded only once even if "load" is being called more than once.
    widget.load('https://example.domain.com');
    this.containerRef = React.createRef();
    this.customizationObject = {
      fontFamily: 'Times New Roman',
      // Google fonts can also be used: 
      // gFontFamily: 'Times+New+Roman',
      baseFontSize: '12px',
      fontColor: 'rgb(16, 21, 46)',
      tables: {
        headerBgColor: '#ddd',
        bodyBgColor: '#fff',
        borderColor: '#ddd',
      },
    };
    this.metricsIds = 'COMMA, SEPARATED, METRIC, LIST';
    this.apiToken = 'SOME_TOKEN';
  }

  errorCallback(message) {
    console.log(message);
  }

  updateWidget() {
    // Call widget.refresh with the DOM element to which the widget should be attached
    // Or call without arguments to attach to any div that matches selector [data-clarity-widget] (document wise!)
    widget.refresh(this.containerRef.current, this.errorCallback);
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
      data-token={this.apiToken}
      data-lang="en"
      data-module="esg-impact"
      data-entities="funds"
      data-metrics-ids={this.metricsIds}
      data-fund={this.props.fund}
      data-style-attributes-json={JSON.stringify(this.customizationObject)}
      ref={this.containerRef}
    >
    </div>;
  }
}

export default ClarityWidget;
