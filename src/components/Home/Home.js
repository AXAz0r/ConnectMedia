import React, { Component } from 'react'
import './Home.scss'
import { connect } from 'react-redux'
import ViewSectionCard from '../../containers/viewSections/ViewSectionCard'
import TableRowContainer from '../../containers/TableRowContainer/TableRowContainer'
import ShortTableRowContainer from '../../containers/TableRowContainer/ShortTableRowContainer'
import SearchContainer from '../../containers/SearchContainer/SearchContainer'
import EditableInline from '../../containers/EditableInline/EditableInline'
import AddContainer from '../../containers/AddContainer/AddContainer'
import { GetSitesListActionRequest, DeleteSiteActionRequest } from '../../store/actions/SitesListAction'
import { GetCategoryListActionRequest } from '../../store/actions/CategoryAction'
import { NotificationManager } from 'react-notifications'



// const test = [
//     {
//         status: 'PUBLISHED',
//         owner: 'nina.simone@gmail.com',
//         nazivKorisnika: 'B92.net',
//         hashes: ['test1', 'test2'],
//         in: '11212',
//         out: '2',
//         txr: '0.02%',
//         id: '1'
//     },
//     {
//         status: 'PUBLISHED',
//         owner: 'nina.simone@gmail.com',
//         nazivKorisnika: 'B92.net',
//         hashes: ['test1', 'test2'],
//         in: '11212',
//         out: '2',
//         txr: '0.02%',
//         id: '2'
//     },
// ]

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            data: [],
            filteredDate: '',
            inputValue: '',
            checkboxList: [],
            hashesArrowDown: false,
            hashesArrowWitchIsOn: '',
            countPerPage: '',
            selectedUserSearch: '',
            selectedCategorieSearch: '',
            addButtonClicked: false,
            confirmMessage: false,
            urlForCreate: '',
            categoryList: ''

        }
    }

    componentDidMount() {
        this.props.dispatch(GetSitesListActionRequest())
        this.props.dispatch(GetCategoryListActionRequest())


    }

    componentDidUpdate(prevProps) {
        const { getSitesList, deleteSite, getCategoryList } = this.props
        const { data: getSitesListData, loading: getSitesListLoading, error: getSitesListError, errorData: getSitesListErrorData } = getSitesList;
        const { data: deleteSiteData, loading: deleteSiteLoading, error: deleteSiteError, errorData: deleteSiteErrorData } = deleteSite;
        const { loading: getCategoryListLoading, error: getCategoryListError, data: getCategoryListData, errorData: getCategoryListErrorData } = getCategoryList


        if (prevProps.getCategoryList !== getCategoryList && !getCategoryListLoading && !getCategoryListError && getCategoryListData) {
            this.setState({ categoryList: getCategoryListData.data })
        }

        if (prevProps.getSitesList !== getSitesList && !getSitesListError && !getSitesListLoading && getSitesListData) {
            console.log(getSitesListData, prevProps);
            this.setState({ data: getSitesListData.data })
        }

        if (prevProps.deleteSite !== deleteSite && !deleteSiteError && !deleteSiteLoading && deleteSiteData) {
            NotificationManager.success("Site successfully deleted", "Success", 2000);
            this.props.dispatch(GetSitesListActionRequest())
        }
    }

    handlePageChange = (value) => {
        this.setState({ page: value })
    }

    handleSortByStatus = (value) => {
        const newData = this.state.data.filter(el => {
            if (el.state === value) {
                return el
            }
        })
        this.setState({ filteredDate: newData })
    }

    handleHomePageSort = (value, sortBy) => {
        // const { filteredDate, data} = this.state
        // const toTheFilter = filteredDate.length === 0 ? data : filteredDate
        const newData = this.state.data.filter(el => {
            if (sortBy === 'users') {
                if (el.owner === value) {
                    return el
                }
            } else if (sortBy === 'categories') {
                if (el.categories === value) {
                    return el
                }
            } else if (sortBy === 'sites') {
                if (el.sites === value) {
                    return el
                }
            }
        })
        this.setState({ filteredDate: newData })
    }

    handleSubtmit = (e) => {
        e.preventDefault()
        const value = this.state.inputValue.toLowerCase()
        const newData = this.state.data.filter(el => {
            return el.name.toLowerCase().includes(value)
        })
        this.setState({ filteredDate: newData })
    }

    handleSearchBar = (e) => {
        this.setState({ inputValue: e.target.value })

    }

    handleCheckbox = (e, item) => {
        if (e.target.checked) {
            this.setState({ checkboxList: [...this.state.checkboxList, item] })

        } else {
            const deleted = this.state.checkboxList.filter((el) => el.id !== item.id)
            this.setState({ checkboxList: deleted })
        }
    }

    handleEditableInlineStatus = (value) => {
        console.log(value);
    }

    handleEditableInlineDropDown = (value) => {
        console.log(value);
    }

    handleArrowSort = (sortByClicked, value) => {
        // ovde moras da imas 2 parametra, moras da prosledis naziv po kome ce se sortirati i drugi je 'up' ili 'down' po tome ces znati koji arrow je kliknut

        if (value === 'Up') {
            const sorted = this.state.data.sort((a, b) => { return b[sortByClicked] - a[sortByClicked] })
            this.setState({ data: sorted })
        } else if (value === 'Down') {
            const sorted = this.state.data.sort((a, b) => { return a[sortByClicked] - b[sortByClicked] })
            this.setState({ data: sorted })
        }
    }

    handleHashArrowClick = (item) => {
        this.setState({ hashesArrowDown: !this.state.hashesArrowDown, hashesArrowWitchIsOn: item })
    }

    handleCountPerPage = (e) => {
        this.setState({ countPerPage: e.target.value })
    }

    handleSearchOnMainPage = (el, secondElement) => {
        if (secondElement === 'users') {
            this.setState({ selectedUserSearch: el })
        } else if (secondElement === 'categories') {
            this.setState({ selectedCategorieSearch: el })
        }
    }

    handleAddSomeMore = () => {
        this.setState({ addButtonClicked: !this.state.addButtonClicked })
    }

    deletesiteFunction = () => {
        this.props.dispatch(DeleteSiteActionRequest({
            id: this.props.match.params.id
        }))
    }

    handleTrashFunctionaliti = () => {
        console.log('hello');
        this.setState({ confirmMessage: true })
    }

    render() {
        console.log(this.state.data, 'ovde bi trebalo da ga sortira');
        const { selectedUserSearch, urlForCreate } = this.state
        return (
            <>
                <div className='mainDivForViewSection' style={{ marginTop: '44px' }}>
                    <div >
                        <ViewSectionCard label={'<p><span>Info categories </span> <br> on site <span>Novosti.rs</span></p>'} description={'<p>Following categories were disabled: <span> sport, vesti, zabava </span> <br> They were disabled because they have less than 2 posts.</p>'} customDescriptionStyle={{ backgroundColor: '#AEE8F0' }} customStyle={{ backgroundColor: '#94D7E0' }} />
                    </div>
                    <div style={{ marginTop: '17px' }}>
                        <ViewSectionCard label={'<p><span>Warning categories </span> <br> on site <span>Novosti.rs</span></p>'} description={'<p>Following categories were disabled: <span> sport, vesti, zabava </span> <br> They were disabled because they have less than 2 posts.</p>'} customDescriptionStyle={{ backgroundColor: '#EFF0AE' }} customStyle={{ backgroundColor: '#DFE094' }} />
                    </div>
                    <div style={{ marginTop: '17px' }}>
                        <ViewSectionCard label={'<p><span>Error categories </span> <br> on site <span>Novosti.rs</span></p>'} description={'<p>Following categories were disabled: <span> sport, vesti, zabava </span> <br> They were disabled because they have less than 2 posts.</p>'} customDescriptionStyle={{ backgroundColor: '#F0D2AE' }} customStyle={{ backgroundColor: '#E0B494' }} />
                    </div>
                </div>
                <SearchContainer handleAddSomeMore={this.handleAddSomeMore} page={this.state.page} handleSearchOnMainPage={this.handleSearchOnMainPage} state={this.state} handleCountPerPage={this.handleCountPerPage} pageName={"SITES"} handleSearchBar={this.handleSearchBar} handleSubtmit={this.handleSubtmit} handlePageChange={this.handlePageChange} handleSortByStatus={this.handleSortByStatus} handleHomePageSort={this.handleHomePageSort} />
                {this.state.addButtonClicked && <AddContainer>
                    {!selectedUserSearch && <p style={{ color: '#7befff', fontSize: '18px', alignSelf: 'center', padding: '0 10px' }}>Please choose owner.</p>}
                    {selectedUserSearch && <input type="text" onChange={(e) => this.setState({ urlForCreate: e.target.value })} placeholder='Enter Url' />}
                    {selectedUserSearch && urlForCreate && <button onClick={() => this.props.history.push({
                        pathname: '/sites/create',
                        data: { url: urlForCreate, owner: selectedUserSearch, buttonClicked: 'editDiv', createNew: true }
                    })}><p>Create site</p></button>}
                </AddContainer>}

                {this.state.checkboxList.length !== 0 && <EditableInline state={this.state} handleEditableInlineStatus={this.handleEditableInlineStatus} handleEditableInlineDropDown={this.handleEditableInlineDropDown} />}
                {this.state.confirmMessage && <div className='confurmTextOnMani'>
                    <h4>Are you sure</h4>
                    <button onClick={this.deletesiteFunction}>Yes</button>
                    <button className="nobutton" onClick={() => this.setState({ confirmMessage: false })}>No</button>
                </div>}
                <div className='mainTableDiv'>
                    <ShortTableRowContainer data={this.state.data} handleTrashFunctionaliti={this.handleTrashFunctionaliti} state={this.state} handleHashArrowClick={this.handleHashArrowClick} handleCheckbox={this.handleCheckbox} handleArrowSort={this.handleArrowSort} checkboxList={this.state.checkboxList} />
                    <TableRowContainer data={this.state.data} handleTrashFunctionaliti={this.handleTrashFunctionaliti} state={this.state} handleHashArrowClick={this.handleHashArrowClick} handleCheckbox={this.handleCheckbox} checkboxList={this.state.checkboxList} handleArrowSort={this.handleArrowSort} />
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    const { SitesListReducer, CategoryReducer } = state;
    const { getSitesList, deleteSite } = SitesListReducer
    const { getCategoryList } = CategoryReducer

    return {
        getSitesList,
        deleteSite,
        getCategoryList

    }
}

export default connect(mapStateToProps, null)(Home)
