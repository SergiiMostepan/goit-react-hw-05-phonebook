import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Statistics from './Statistics/Statistics';
import Buttons from './Buttons/Buttons';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export default class Counter extends Component {
  static defaultProps = {
    step: 1,
    message: 'No feedback given',
  };

  static propTypes = {
    step: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    posFeedback: 0,
    notifocations: false,
  };

  hendelIncrementStatistick = ({ target }) => {
    const { name } = target;
    this.setState(state => ({
      [name]: state[name] + this.props.step,
    }));
    this.setState(state => ({
      notifocations: true,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage(name);
  };

  countTotalFeedback = () => {
    this.setState(state => ({
      total: state.good + state.neutral + state.bad,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(state => ({
      posFeedback: Math.round((state.good / state.total) * 100),
    }));
  };

  render() {
    return (
      <Section>
        <Buttons
          type="button"
          onIncrementStatistick={this.hendelIncrementStatistick}
        />
        {this.state.notifocations ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            posFeedback={this.state.posFeedback}
          />
        ) : (
          <Notification message={this.props.message} />
        )}
      </Section>
    );
  }
}
