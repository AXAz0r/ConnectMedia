import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavWidget from '../../containers/NavWidget/NavWidget'
import xButton from '../../assets/img/SiteDetails/xButton.svg'
import { connect } from 'react-redux'
import '../SiteDetails/SiteDetails.scss'
import SaveButtonEdit from '../../containers/Buttons/SaveButtonEdit'
import Chart from '../../containers/Chart/Chart'
import VerticalChart from '../../containers/Chart/VerticalChart'
import Select from 'react-select'
import { GetWidgetDetailsActionRequest, CreateWidgetActionRequest, UpdateWidgetDetailsActionRequest, DeleteWidgetActionRequest } from '../../store/actions/WidgetActions'
import { GetCategoryListActionRequest } from '../../store/actions/CategoryAction'

import { NotificationManager } from 'react-notifications'

const customSelectStyles = {
    control: (base, state) => ({
        ...base,
        // height: "48px",
        flex: "1",
        fontWeight: "500",
        // background: "white",
        background: '#d6dbdc',
        // !props.organization && props.color && "rgb(245, 192, 192)",
    }),
    placeholder: () => ({
        color: 'black'
    })

};

const data = [
    {
        name: 'Page A',
        uv: 590,
        pv: 800,
        amt: 1400,
    },
    {
        name: 'Page B',
        uv: 590,
        pv: 800,
        amt: 1400,
    },
    {
        name: 'Page C',
        uv: 590,
        pv: 800,
        amt: 1400,
    },
    {
        name: 'Page D',
        uv: 590,
        pv: 800,
        amt: 1400,
    },
]

const options = [0, 1, 2, 3]

export class WidgetsDetails extends Component {
    constructor(prosp) {
        super(prosp)
        this.state = {
            isIteditable: false,
            whichisit: '',
            WidgetDetailsData: '',
            siteDetailsData: '',
            tabClicked: '',
            dataState: null,
            name: null,
            site: null,
            status: null,
            publicValue: null,
            image: null,
            description: null,
            categories: null,
            sites: null,
            include: null,
            minima: null,
            direct: null,
            append: null,
            same_window: null,
            ignore_impressions: null,
            count: null,
            width: null,
            height: null,
            encoding: null,
            template: null,
            siteOptions: [],
            wordToPass: ''

        }
    }

    handleWhereEverNav = (page) => {
        if (page === 'editDiv') {
            this.setState({ isIteditable: true })
        } else if (page === 'statsDiv') {
            this.setState({ isIteditable: false })
        } else if (page === 'viewDiv') {
            this.props.history.push({
                pathname: '/sites',
                state: { whichToFilter: 'test' }
            })
        } else if (page === 'embedDiv') {
            this.setState({ isIteditable: false })
        }
        else {
            this.setState({ isIteditable: false })
        }
        this.setState({ tabClicked: page, wordToPass: '' })
    }

    componentDidMount() {
        this.props.dispatch(GetCategoryListActionRequest())

        const { data: getSitesListData, loading: getSitesListLoading, error: getSitesListError, errorData: getSitesListErrorData } = this.props.getSitesList;
        if (!getSitesListError && !getSitesListLoading && getSitesListData) {
            const siteOptions = getSitesListData.data.map(el => {
                return { value: el.id, label: el.name ? el.name : 'no name' }
            })
            this.setState({ siteOptions })
        }

        if (!this.props?.location?.data?.createNew) {
            this.props.dispatch(GetWidgetDetailsActionRequest({
                id: this.props.match.params.id
            }))

        }
    }

    componentDidUpdate(prevProps) {
        const { getWidgetDetails, getCategoryList, deleteWidget, createWidget, updateWidgetDetails } = this.props
        const { data: getWidgetDetailsData, loading: getWidgetDetailsLoading, error: getWidgetDetailsError, errorData: getWidgetDetailsErrorData } = getWidgetDetails;
        const { data: getCategoryListData, loading: getCategoryListLoading, error: getCategoryListError, errorData: getCategoryListErrorData } = getCategoryList;
        const { data: deleteWidgetData, loading: deleteWidgetLoading, error: deleteWidgetError, errorData: deleteWidgetErrorData } = deleteWidget;
        const { data: createWidgetData, loading: createWidgetLoading, error: createWidgetError, errorData: createWidgetErrorData } = createWidget;
        const { data: updateWidgetDetailsData, loading: updateWidgetDetailsLoading, error: updateWidgetDetailsError, errorData: updateWidgetDetailsErrorData } = updateWidgetDetails;


        if (prevProps.getCategoryList !== getCategoryList && !getCategoryListError && !getCategoryListLoading && getCategoryListData) {
            this.setState({
                categoryList: getCategoryListData.data,
            })
        }


        if (prevProps.getWidgetDetails !== getWidgetDetails && !getWidgetDetailsError && !getWidgetDetailsLoading && getWidgetDetailsData) {

            this.setState({
                dataState: getWidgetDetails.data.status,
                WidgetDetailsData: getWidgetDetailsData.data,
            })
        }



        if (prevProps.deleteWidget !== deleteWidget && !deleteWidgetError && !deleteWidgetLoading && deleteWidgetData) {
            NotificationManager.success("Widget successfully deleted", "Success", 2000);
            this.props.history.push('/widgets')
        }

        if (prevProps.createWidget !== createWidget && !createWidgetError && !createWidgetLoading && createWidgetData) {
            NotificationManager.success("Widget successfully created", "Success", 2000);
            this.props.history.push('/widgets')
        } else if (prevProps.createWidget !== createWidget && createWidgetError && createWidgetErrorData) {
            NotificationManager.error(`${createWidgetErrorData.data.message}`, "Failed", 2000);

        }

        if (prevProps.updateWidgetDetails !== updateWidgetDetails && !updateWidgetDetailsError && !updateWidgetDetailsLoading && updateWidgetDetailsData) {
            NotificationManager.success("Widget successfully updated", "Success", 2000);
            this.props.history.push('/widgets')
        } else if (prevProps.updateWidgetDetails !== updateWidgetDetails && updateWidgetDetailsError && updateWidgetDetailsErrorData) {
            NotificationManager.error(`${updateWidgetDetailsErrorData.data.message}`, "Failed", 2000);

        }
    }


    handleButtonActive = (page) => {
        if (page === 'save') {
            const { name, site, status, dataState, image, description, categories, sites, include, minima, direct, append, same_window, ignore_impressions, count, width, height, encoding, template,
                publicValue,
            } = this.state
            if (this.props.location.data?.createNew) {
                this.props.dispatch(CreateWidgetActionRequest({
                    name,
                    site,
                    status: dataState,
                    'public': publicValue,
                    image,
                    description,
                    categories,
                    sites,
                    include,
                    minima,
                    direct,
                    append,
                    same_window,
                    ignore_impressions,
                    count,
                    width,
                    height,
                    encoding,
                    template
                }))
            } else {
                this.props.dispatch(UpdateWidgetDetailsActionRequest({
                    id: this.props.match.params.id,
                    name,
                    site,
                    status: dataState,
                    'public': publicValue,
                    image,
                    description,
                    categories,
                    sites,
                    include,
                    minima,
                    direct,
                    append,
                    same_window,
                    ignore_impressions,
                    count,
                    width,
                    height,
                    encoding,
                    template

                }))
            }
        } else if (page === 'cancel') {
            this.setState({ isIteditable: false, wordToPass: 'canceled' })
        } else {
            this.setState({ whichisit: page })
        }
    }

    handleStatusChange = (status) => {
        this.setState({ dataState: status })
    }

    handleTrashClick = () => {
        this.setState({ confirmMessage: true })
    }

    deleteuserFunction = () => {
        this.props.dispatch(DeleteWidgetActionRequest({
            id: this.props.match.params.id
        }))
    }

    handleSite = value => {
        this.setState({ site: value.value })
    }

    handlewidgetInput = e => {
        if (e.target.type === 'number') {
            this.setState({ [e.target.name]: parseInt(e.target.value) })

        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }

    handlePostDetailsCategorie = value => {
        const saveData = value.length !== 0 ? value.map(el => el.value) : []
        this.setState({ categories: saveData })
    }

    render() {
        const { isIteditable, dataState, site, categoryList, wordToPass, siteDetailsData, tabClicked, WidgetDetailsData, publicValue, include, direct, same_window, ignore_impressions, siteOptions } = this.state

        const categorialOption = categoryList?.map(el => {
            return { value: el.id, label: el.name }
        })


        return (
            <div className='mainSiteDetailsDiv'>
                <NavWidget handleWhereEverNav={this.handleWhereEverNav} wordToPass={wordToPass} handleTrashClick={this.handleTrashClick} isButtonNamepased={this.props?.location?.data?.buttonClicked} pageName={'widgets'} />
                {this.state.confirmMessage && <div className='confurmText'>
                    <h4>Are you sure</h4>
                    <button onClick={this.deleteuserFunction}>Yes</button>
                    <button className="nobutton" onClick={() => this.setState({ confirmMessage: false })}>No</button>
                </div>}
                {tabClicked === 'statsDiv' && <> <div style={{ height: '500px', marginTop: '20px' }}>
                    <Chart customStyle={{ padding: '0' }} />
                </div>
                    <h1 style={{ marginTop: '50px', textAlign: 'center', fontSize: '30px' }}>Daily totals for post</h1>
                    <div style={{ height: `200px` }}>
                        <VerticalChart customData={data} customStyle={{ padding: '0' }} />
                    </div>
                </>
                }
                {tabClicked !== 'statsDiv' && tabClicked !== 'embedDiv' && <div className='mainSiteInfoDiv'>
                    <div className='leftSideDiv'>
                        <div className='generalDiv'>
                            <h1>General</h1>
                            <div className='status_div'>
                                <h4>Status</h4>
                                {!isIteditable && <div className='coloredDivStatus' style={{ background: WidgetDetailsData?.status === 1 ? '#ABD996' : WidgetDetailsData?.status === 0 ? '#DFE094' : WidgetDetailsData?.status === 2 ? '#E09494' : WidgetDetailsData?.status === 2 ? '#295265' : '' }}>
                                    {WidgetDetailsData?.status === 1 ? 'PUBLISHED' : WidgetDetailsData?.status === 0 ? 'DRAFT' : WidgetDetailsData?.status === 2 ? 'ERROR' : WidgetDetailsData?.status === 3 ? 'TRASH' : ''}

                                </div>}
                                {isIteditable && <div className='mainOptionDiv'>
                                    {options.map((item, key) => {
                                        return <div key={key} onClick={() => this.handleStatusChange(item)} className='coloredDivStatus' style={{ height: item === dataState && '47px', background: item === 1 ? '#ABD996' : item === 0 ? '#DFE094' : item === 2 ? '#E09494' : item === 3 ? '#295265' : '' }}>
                                            {item === 1 ? 'PUBLISHED' : item === 0 ? 'DRAFT' : item === 2 ? 'ERROR' : item === 3 ? 'TRASH' : ''}
                                        </div>

                                    })}
                                </div>
                                }
                            </div>
                            <div className='name_div'>
                                <h4>Name</h4>
                                {!isIteditable && <p>{WidgetDetailsData?.name}</p>}
                                {isIteditable && <input type="text" name='name' onChange={(e) => this.handlewidgetInput(e)} placeholder={WidgetDetailsData?.name} />}
                            </div>
                            <div className='url_div'>
                                <h4>Public</h4>
                                {!isIteditable && <p>{WidgetDetailsData && WidgetDetailsData['public']}</p>}
                                {isIteditable && <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><input style={{ width: '20px' }} type="checkbox" name="check" value={publicValue !== null ? publicValue : WidgetDetailsData['public']} checked={publicValue !== null ? publicValue : WidgetDetailsData['public']} onChange={(e) => this.setState({ publicValue: e.target.checked })} /></div>}

                            </div>
                            <h1 style={{ margin: '20px 0' }}>Default content</h1>


                            <div className='owner_div'>
                                <h4>Include site</h4>
                                {!isIteditable && <p>{WidgetDetailsData?.include}</p>}
                                {isIteditable && <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><input style={{ width: '20px' }} type="checkbox" name="check" value={include !== null ? include : WidgetDetailsData?.include} checked={include !== null ? include : WidgetDetailsData?.include} onChange={(e) => this.setState({ include: e.target.checked })} /></div>}
                            </div>
                            <div className='owner_div'>
                                <h4>Link direct</h4>
                                {!isIteditable && <p>{WidgetDetailsData?.direct}</p>}
                                {isIteditable && <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><input style={{ width: '20px' }} type="checkbox" name="check" value={direct !== null ? direct : WidgetDetailsData?.direct} checked={direct !== null ? direct : WidgetDetailsData?.direct} onChange={(e) => this.setState({ direct: e.target.checked })} /></div>}
                            </div>
                            <div className='description_div'>
                                <h4>Open site posts in the same window</h4>
                                {!isIteditable && <p>{WidgetDetailsData?.same_window}</p>}
                                {isIteditable && <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><input style={{ width: '20px' }} type="checkbox" name="check" value={same_window !== null ? same_window : WidgetDetailsData?.same_window} checked={same_window !== null ? same_window : WidgetDetailsData?.same_window} onChange={(e) => this.setState({ same_window: e.target.checked })} /></div>}

                            </div>
                            <div className='description_div'>
                                <h4>Append to links</h4>
                                {!isIteditable && <p>{WidgetDetailsData?.append}</p>}
                                {isIteditable && <input type="text" name='append' onChange={(e) => this.handlewidgetInput(e)} placeholder={WidgetDetailsData?.append} />}

                            </div>
                            <h1 style={{ margin: '20px 0' }}>Order</h1>
                            <div className='head_div'>
                                <h4>Do not register impressions</h4>
                                {!isIteditable && <p>{WidgetDetailsData?.ignore_impressions}</p>}
                                {isIteditable && <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><input style={{ width: '20px' }} type="checkbox" name="check" value={ignore_impressions !== null ? ignore_impressions : WidgetDetailsData?.ignore_impressions} checked={ignore_impressions !== null ? ignore_impressions : WidgetDetailsData?.ignore_impressions} onChange={(e) => this.setState({ ignore_impressions: e.target.checked })} /></div>}

                            </div>
                            <h1 style={{ margin: '20px 0' }}>Default content</h1>
                            <div className='description_div'>
                                <h4>Count</h4>
                                {!isIteditable && <p>{WidgetDetailsData?.count}</p>}
                                {isIteditable && <input type="number" name='count' onChange={(e) => this.handlewidgetInput(e)} placeholder={WidgetDetailsData?.count} />}

                            </div>
                            <div className='description_div'>
                                <h4>Encoding</h4>
                                {!isIteditable && <p>{WidgetDetailsData?.encoding}</p>}
                                {isIteditable && <input type="text" name='encoding' onChange={(e) => this.handlewidgetInput(e)} placeholder={WidgetDetailsData?.encoding} />}

                            </div>
                            <div className='description_div'>
                                <h4>Image width</h4>
                                {!isIteditable && <p>{WidgetDetailsData?.width}</p>}
                                {isIteditable && <input type="number" name='width' onChange={(e) => this.handlewidgetInput(e)} placeholder={WidgetDetailsData?.width} />}

                            </div>
                            <div className='description_div'>
                                <h4>Image height</h4>
                                {!isIteditable && <p>{WidgetDetailsData?.height}</p>}
                                {isIteditable && <input type="number" name='height' onChange={(e) => this.handlewidgetInput(e)} placeholder={WidgetDetailsData?.height} />}

                            </div>
                            <div className='description_div'>
                                <h4>Template</h4>
                                {!isIteditable && <p>{WidgetDetailsData?.template}</p>}
                                {isIteditable && <textarea style={{ flex: '1', padding: '10px', background: '#d6dbdc', marginRight: '20px', border: 'none', borderRadius: '5px' }} type="text" name='template' onChange={(e) => this.handlewidgetInput(e)} placeholder={WidgetDetailsData?.template} />}

                            </div>
                        </div>


                    </div>
                    <div className='rightSideDiv'>
                        <div className='categoriesDiv'>
                            <h1>Categories</h1>


                            <div className='categ_div'>
                                <h4>Categories</h4>
                                {!isIteditable && <div className='listOfCateg'>
                                    <p>{WidgetDetailsData?.categories?.map(el => el.name)}</p>


                                </div>}
                                {isIteditable && <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    defaultValue={WidgetDetailsData?.categories?.map(el => categorialOption[el.id])}
                                    // defaultValue={colourOptions[0]}
                                    onChange={this.handlePostDetailsCategorie}

                                    // isLoading={true}
                                    isMulti
                                    styles={customSelectStyles}
                                    // isClearable={true}
                                    isSearchable={true}
                                    name="merge"
                                    options={categorialOption}
                                />}
                            </div>

                            <div className='categ_div selectable'>
                                <h4 style={{ width: '100px' }}>Site</h4>
                                {!isIteditable && <p>{site ? siteOptions.map(el => el.value === site ? el.label : '') : WidgetDetailsData?.site?.name}</p>}
                                {/* {isIteditable && <select style={{ flex: '1', marginRight: '20px', border: 'none', background: '#d6dbdc', textIndent: '10px', borderRadius: '5px' }}>
                                    <option className='options' value="test">test</option>
                                    <option className='options' value="test">test</option>
                                </select>} */}
                                {isIteditable && <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    // defaultValue={colourOptions[0]}
                                    // isLoading={true}
                                    onChange={this.handleSite}
                                    placeholder={site ? siteOptions.map(el => el.value === site ? el.label : '') : WidgetDetailsData?.site?.name}

                                    styles={customSelectStyles}
                                    isClearable={true}
                                    isSearchable={true}
                                    name="merge"
                                    options={this.state.siteOptions}
                                />}
                            </div>
                            <div className='categ_div'>
                                <h4>Owner</h4>
                                <Link to={`${WidgetDetailsData?.owner?.email}`}>{WidgetDetailsData?.owner?.email}</Link>
                                {/* {isIteditable && <input type="text" placeholder='nina.aralica@alo.rs' />} */}
                            </div>
                            <div className='categ_div'>
                                <h4>Description</h4>
                                {!isIteditable && <p>{WidgetDetailsData?.description}</p>}
                                {isIteditable && <input type="text" name='description' onChange={(e) => this.handlewidgetInput(e)} placeholder={WidgetDetailsData?.description} />}

                            </div>


                        </div>

                    </div>
                </div>}

                {isIteditable && <div className='buttonsDiv'>
                    <SaveButtonEdit labeltext={'Save changes'} handleButtonActive={() => this.handleButtonActive('save')} colorization={'ScrapeClass'} customStyle={{ fontWeight: 'bold', height: '58px', width: "260px" }} />
                    <SaveButtonEdit labeltext={'Cancel'} handleButtonActive={() => this.handleButtonActive('cancel')} colorization={`ScrapeClass clicked`} customStyle={{ fontWeight: 'bold', height: '58px', width: "184px" }} />
                </div>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { WidgetReducer, SitesListReducer, CategoryReducer } = state;
    const { getWidgetDetails, deleteWidget, createWidget, updateWidgetDetails } = WidgetReducer
    const { getCategoryList } = CategoryReducer
    const { getSitesList, getSiteDetails } = SitesListReducer
    return {
        getWidgetDetails,
        getSitesList,
        getSiteDetails,
        getCategoryList,
        deleteWidget,
        createWidget,
        updateWidgetDetails

    }
}

export default connect(mapStateToProps, null)(WidgetsDetails)
