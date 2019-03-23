# Simple React Pagination
A purely functional react component to take care of pagination with ease. Meant to be used with twitter bootstrap.

## Set up
`srp` can be installed from `npm` by running:

    npm i @ds-labs.xyz/srp

## Features
This component will:

- Display a list of page numbers
- Calculate the correct page numbers to display depending on the current page and total number of pages
- Handle edge cases, such as when the number is greater than the total number of pages
- Notify you when a page number is clicked

This component will not:
- Manage page changes

## Usage
Import the component with:

    import { Pagination } from "@ds-labs.xyz/srp";

Then use it wherever you like:

    <Pagination totalItems={200} itemsPerPage={20} page={1}/>

Optionally you can use the `pagesToDisplay` property to control how many pages are displayed:

    <Pagination totalItems={200} itemsPerPage={20} page={1} pagesToDisplay={5}/>

To manage page changes you can pass a function to the `onPageChange` property which will be triggered when the user clicks on a page change like so:

    <Pagination
        totalItems={200}
        itemsPerPage={10}
        page={1}
        onPageChange={(e) => console.log("User requested page " + parseInt(e.target.innerHTML, 10))}
    />

## Complete Example

    import React, {Component} from 'react';
    import {Pagination} from '@ds-labs.xyz/srp';

    class App extends Component {
        state = {
            currentPage: 1
        }
    
        handlePageChange = (e) => {
            const pageRequested = parseInt(e.target.innerHTML, 10)
            // console.log("User requested page " + pageRequested)
            this.setState({currentPage: pageRequested})
        }

        render() {
            return (
                <div className="App">
                    <header className="App-header">
                        <Pagination
                            totalItems={200}
                            itemsPerPage={10}
                            page={this.state.currentPage}
                            onPageChange={this.handlePageChange}
                        />
                    </header>
                </div>
            );
        }
    }

    export default App;
