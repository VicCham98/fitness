import React, {Component} from "react";
import ExerciseForm from "../components/ExerciseForm";
import Card from "../components/Card";
import axios from "axios";
import FatalError from "./500";
import ExerciseNew from "./ExerciseNew";
import url from '../config'

export default class ExerciseNewContainer extends Component{

    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        },
        loading: false,
        error: null
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        })
    };

    handleSubmit = async e => {
        this.setState({
            loading: true
        });
        e.preventDefault();
        try {
            let res = await axios.post(`${url}/item/guardar/`, this.state.form);
            let json = await res.data;
            console.log(json);

            this.setState({
                loading: false
            });

            this.props.history.push('/exercise');
        } catch (error) {
            this.setState({
                loading: false,
                error
            });
        }
        // console.log(this.state)
    };

    render() {
        if (this.state.error)
            return <FatalError/>;
        return <ExerciseNew
            form={this.state.form}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
        />
    }
}