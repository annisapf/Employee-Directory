import React, { Component } from "react";
import Row from "./Row/Row";
import Column from "./Column/Column";
import Search from "./Search/Search";

import Table from "./Table/Table";
import renderDataAPI from "../utils/API";


class MainPage extends Component {
    state = {
        result: [],
        search: "",
        searchResult: [],
    };

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        renderDataAPI()
            .then(res => {
                this.setState({ result: res.data.results })
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value.toLowerCase();
        const name = event.target.name;
        this.setState({
            [name]: value
        }, () => {
            this.searching()
        });
    };


    newDate = (date) => new Date(date);

    searching = () => {
        let resultFromAPI = this.state.result;
        let searchTerm = this.state.search

        const checkInput =
            resultFromAPI.filter((employee) =>
                (
                    (employee.name.first).toLowerCase() + " " +
                    (employee.name.last).toLowerCase() + " " +
                    (employee.phone) + " " +
                    (employee.email) + " " +
                    (`${this.newDate(employee.dob.date).getMonth() + 1}/${this.newDate(employee.dob.date).getDate()}/${this.newDate(employee.dob.date).getFullYear()}`)
                ).includes(searchTerm)
            )

        this.setState({ searchResult: checkInput })
    }

    ascenFunction = (state, field1, field2) => {
        let sorted = state.sort((a, b) =>
            (a[field1][field2] > b[field1][field2]) ? 1 : -1)

        this.setState({ searchResult: sorted })
    }

    descenFunction = (state, field1, field2) => {
        let sorted = state.sort((a, b) =>
            (a[field1][field2] > b[field1][field2]) ? 1 : -1).reverse()

        this.setState({ searchResult: sorted })
    }

    handleButtonClick = (event) => {
        event.preventDefault()
        const btnName = event.currentTarget.getAttribute("data-value")

        let resultFromAPI = this.state.result;
        let searchTerm = this.state.searchResult;

        if (btnName === "first-asc") {
            if (this.state.search === "") {
                this.ascenFunction(resultFromAPI, "name", "first");
            } else {
                this.ascenFunction(searchTerm, "name", "first");
            }

        } else if (btnName === "last-asc") {

            if (this.state.search === "") {
                this.ascenFunction(resultFromAPI, "name", "last");
            } else {
                this.ascenFunction(searchTerm, "name", "last");
            }

        } else if (btnName === "first-desc") {

            if (this.state.search === "") {
                this.descenFunction(resultFromAPI, "name", "first");
            } else {
                this.descenFunction(searchTerm, "name", "first");
            }

        } else if (btnName === "last-desc") {

            if (this.state.search === "") {
                this.descenFunction(resultFromAPI, "name", "last");
            } else {
                this.descenFunction(searchTerm, "name", "last");
            }

        }
    }

    render() {
        return (
            <Row>
                <Column size="lg-12">
                    <Search
                        value={this.state.search}
                        handleInputChange={this.handleInputChange}
                    />
                </Column>

                <Column size="lg-12">
                    <Table
                        employees={this.state.search === "" ? this.state.result : this.state.searchResult}
                        onClick={this.handleButtonClick}
                    />
                </Column>
            </Row>
        );
    }
}

export default MainPage;