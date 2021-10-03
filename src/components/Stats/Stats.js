import React, { Component } from 'react'
import Table from 'rc-table';
import { connect } from 'react-redux'
import './Stats.scss'
import { GetStatsActionRequest } from '../../store/actions/StatsAction';
import { GetCategoryListActionRequest } from '../../store/actions/CategoryAction'
import { thisExpression } from '@babel/types';
import { v4 as uuidv4 } from 'uuid'




const categories = ['Site', 'B92', 'Auto', 'Biznis', 'Kuhinja', 'Ljubav', 'Moda', 'Novosti', 'Total']




export class Stats extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columns: [],
            data: []
        }
    }

    componentDidMount() {
        this.props.dispatch(GetCategoryListActionRequest())

        this.props.dispatch(GetStatsActionRequest())


    }


    componentDidUpdate(prevProps) {
        const { getStats, getCategoryList } = this.props
        const { loading: getStatsLoading, error: getStatsError, data: getStatsData, errorData: getStatsErrorData } = getStats
        const { loading: getCategoryListLoading, error: getCategoryListError, data: getCategoryListData, errorData: getCategoryListErrorData } = getCategoryList

        if (prevProps.getCategoryList !== getCategoryList && !getCategoryListLoading && !getCategoryListError && getCategoryListData) {
            let filteredCategories = getCategoryListData?.data?.map((el, i) => {
                return { title: el.name, dataIndex: el.name.toLowerCase(), key: el.name.toLowerCase() }
            })
            const columns = [{ title: 'Site', dataIndex: 'site', key: 'site' }, ...filteredCategories, { title: 'Total', dataIndex: 'total', key: 'total' }]
            this.setState({ columns })
        }



        if (prevProps.getStats !== getStats && !getStatsLoading && !getStatsError && getStatsData) {
            const dataToShow = getStatsData?.data?.stats?.map(el => {
                const elem = Object.keys(el.stats)
                const newasdf = elem.length !== 0 && elem.map(elm => {
                    return { [`${elm.toLowerCase()}`]: [<p><span className='underskoredSpan' onClick={() => console.log(el.id, el.state)}>{el.stats[elm]['stats']['published']}</span> <span onClick={() => console.log(el.id, el.state)} className="span2 underskoredSpan">{el.stats[elm]['stats']['draft']}</span></p>] }
                })
                let arrayoFObj = newasdf.reduce(((r, c) => Object.assign(r, c)), {})
                return {
                    statusState: el.state,
                    key: el.id,
                    site: [<p className='underskoredP' onClick={() => this.props.history.push(`/sites/${el.id}`)}>{el.name}</p>],
                    ...arrayoFObj,
                    total: [<p><span className='underskoredSpan' onClick={() => console.log(el.id, el.state)}>{el.total.published}</span> <span onClick={() => console.log(el.id, el.state)} className="span2 underskoredSpan">{el.total.draft}</span></p>]
                }
            })

            const totals = getStatsData?.data?.total?.map(el => {
                return {
                    [`${el.name.toLowerCase()}`]: [<p><span onClick={() => console.log(el.id, el.state)}>{el.stats.published}</span> <span onClick={() => console.log(el.id, el.state)} className="span2">{el.stats.draft}</span></p>],
                }
            })

            let arrayoFObj = totals.reduce(((r, c) => Object.assign(r, c)), { site: [<p>Total</p>], key: uuidv4(), total: [<p><span >{getStatsData?.data?.overall.published}</span> <span className="span2">{getStatsData?.data?.overall.draft}</span></p>] })




            this.setState({ data: [...dataToShow, arrayoFObj] })
        }

    }



    render() {
        const { columns } = this.state
        return (
            <div className='mainStatsDiv'>
                <Table columns={columns} data={this.state.data}
                    rowClassName={(record, index) => {
                        if (record.statusState === 0) {
                            return 'draft'
                        } else if (record.statusState === 1) {
                            return 'published'
                        } else if (record.statusState === 2) {
                            return 'error'
                        } else if (record.statusState === 3) {
                            return 'trash'
                        } else { return '' }

                    }}
                />
                <div className='StatsMainShortTable'>
                    {this.state.data.map((item, key) => {
                        console.log(item, 'hello');
                        return <div key={key} className='mainDivShotScreenStats'>

                            {/* &.draft {
          background: #dfe094;
        }
        &.error {
          background: #e09494;
        }
        &.trash {
          background: #295265;
        } */}

                            <div className='mainDivInOutStats' style={{ background: item.statusState === 2 && 'rgba(223, 224, 148, 0.75)' }}>
                                {columns.map((el, i) => {
                                    return <div key={i} className='statistic'>
                                        <div>
                                            <p>{el.title}</p>
                                        </div>
                                        {/* {this.handleForLoop(item, el)} */}
                                        <p className="valueP">{item[`${el}`]}</p>
                                    </div>
                                })}
                            </div>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { StatsReducer, CategoryReducer } = state;
    const { getStats } = StatsReducer
    const { getCategoryList } = CategoryReducer




    return {
        getStats,
        getCategoryList
    }
}

export default connect(mapStateToProps, null)(Stats)
