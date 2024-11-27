import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import ListComponent from './ListComponent.tsx';
import { Spinner } from 'react-bootstrap';

function FormComponent() {

    const [loading, setLoading] = useState(false); 

    const [responseData, setResponseData] = useState({});

    const [formData, setFormData] = useState({
        keyword: "",
        interval: "",
        n: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { keyword, interval, n } = formData;
        const url = `http://localhost:8080/api/news/search`;
        setLoading(true); 
        try {
            const res = await axios.get(url, {
                params: { keyword, interval, n },
            });
            setResponseData(res.data); 
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div>
            <Form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem', 
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Form.Label htmlFor="keyword">Keyword</Form.Label>
                    <Form.Control
                        type="text"
                        id="keyword"
                        name="keyword"
                        value={formData.keyword}
                        onChange={handleChange}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Form.Label htmlFor="interval">Interval</Form.Label>
                    <Form.Select
                        id="interval"
                        name="interval"
                        value={formData.interval}
                        onChange={handleChange}
                    >
                        <option>Open this select menu</option>
                        <option value="hours">Hours</option>
                        <option value="days">Days</option>
                        <option value="weeks">Weeks</option>
                        <option value="months">Months</option>
                        <option value="years">Years</option>
                    </Form.Select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Form.Label htmlFor="n">N</Form.Label>
                    <Form.Control
                        type="number"
                        id="n"
                        name="n"
                        value={formData.n}
                        onChange={handleChange}
                    />
                </div>
                <Button style={{marginTop:'30px'}} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <div style={{marginTop:'50px',borderTop:'1px solid grey',paddingTop:'50px'}}>
                {loading ? (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                        <Spinner animation="border" variant="primary" />
                    </div>
                ) : (
                    <ListComponent data={responseData} />
                )}
            </div>
        </div>
    );
}

export default FormComponent;
