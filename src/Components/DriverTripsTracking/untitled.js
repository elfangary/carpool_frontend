 
                    
                    const hhs_rate = trip.stop_points.map((stop_point) => {
                        return stop_point.hh.map((hh) => {
                            return (
                                <div>
                                    <p className="hh-profile-picture">{hh.profile_pic}</p>
                                    <p>{hh.name}</p>
                                    <Rater total={5} rating={0} onRate={(event) => this.handleUserRating(trip.id, hh.hh_id, event)} />
                                </div>
                            )
                        })
                    })
                    return (
                        <div className="trip clearfix">
                            
                            <div className="trip-container clearfix">
                                
                               
                                <div className="flex">
                                    
                                        return (
                                            
                                                {stop_point.hh.map((hh, index) => {
                                                    return (
                                                        <div className="request clearfix">
                                                            <button className="circle-button" type="primary" onClick={() => this.showModal(hh.name, hh.profile_pic, hh.booked_seats, hh.confirm, hh.id, hh.phone, hh.rate, hh.email)}></button>
                                                            <Modal
                                                                title={request.name}
                                                                visible={this.state.visible}
                                                                onOk={this.handleOk}
                                                                onCancel={this.handleCancel}
                                                                mask={false}
                                                                maskClosable={false}
                                                                width= {300}
                                                                bodyStyle={style}
                                                                style={style}
                                                            >
                                                                {(request.confirm != "rejected") ?
                                                                    <div>
                                                                        <p className="hh-profile-picture"></p>
                                                                        <p className="hh-details">{request.rate}</p>
                                                                        <p className="hh-details hh-phone">{request.phone}</p>
                                                                        <p className="hh-details hh-email">{request.email}</p>
                                                                        <p className="hh-details">Booked Seats: {request.seats}</p>
                                                                    </div>
                                                                : null}
                                                                {(trip.status === "pending" && request.confirm === "pending")?
                                                                    <RadioGroup
                                                                        onChange={(e) => changeHhStopStatus(request.id, e.target.value)}
                                                                        size={"large"} >
                                                                        <RadioButton value="accepted" className="">Accept</RadioButton>
                                                                        <RadioButton value="rejected">Reject</RadioButton>
                                                                    </RadioGroup>
                                                                : (request.confirm === "accepted")? <p className="accepted">{request.confirm}</p> : <p className="rejected">{request.confirm}</p>}
                                                                {(trip.status === "ended" && request.confirm === "accepted")?
                                                                    (<div>
                                                                        <Rater total={5} rating={0} onRate={(event) => this.handleUserRating(trip.id, hh.hh_id, event)} />
                                                                    </div>) : null
                                                                }
                                                            </Modal>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        )
                                    })}
                                    <div className="car-container">

                                    </div>
                                    {(trip.status === "ended" && trip.stop_points.map((stop_point) => {
                                        stop_point.hh.map((hh) => {
                                        hh.confirm != "accepted"
                                    })
                                    }))? (<div>
                                            <Button type="primary" className="open-modal" onClick={() => this.showModalRate(trip.id)}>Rate Your Hitch Hikers</Button>
                                            <Modal
                                                title={request.name}
                                                className="modal"
                                                visible={this.state.visible}
                                                onOk={this.handleOk}
                                                onCancel={this.handleCancel}
                                                mask={false}
                                                maskClosable={false}
                                                width= {300}
                                                bodyStyle={style}
                                                style={style}
                                            >
                                            <div>{hhs_rate}</div>
                                            <button type="button" onClick={() =>  this.handleSubmit()}>Rate</button>
                                            </Modal>
                                        </div>
                                        ) : null}
                                </div>
                            </div>
                        </div>
                    )
                })}