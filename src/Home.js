import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function App() {
    return (
        <>
        <Header />
        <main>
        <section className="home-section">
            <h2><b>So you think you know ReactJS?</b> Take the 10 quizzes below to test your knowledge.</h2>
            <div className="two-cols">
            <div>
            <p><b>1</b> - &nbsp;Components quiz: <Link to="/quiz-questions/1">Start</Link> </p>
            <p><b>2</b> - &nbsp;JSX quiz: <Link to="/quiz-questions/2">Start</Link> </p>
            <p><b>3</b> - &nbsp;State and Props quiz: <Link to="/quiz-questions/3">Start</Link> </p>
            <p><b>4</b> - &nbsp;Lifecycle methods quiz: <Link to="/quiz-questions/4">Start</Link> </p>
            <p><b>5</b> - &nbsp;Events and Handling quiz: <Link to="/quiz-questions/5">Start</Link> </p>
            </div>
            <div>
            <p><b>6</b> - &nbsp;Hooks quiz: <Link to="/quiz-questions/6">Start</Link> </p>
            <p><b>7</b> - &nbsp;Routing quiz: <Link to="/quiz-questions/7">Start</Link> </p>
            <p><b>8</b> - &nbsp;Forms quiz: <Link to="/quiz-questions/8">Start</Link> </p>
            <p><b>9</b> - &nbsp;Context Api quiz: <Link to="/quiz-questions/9">Start</Link> </p>
            <p><b>10</b> - &nbsp;Error Handling quiz: <Link to="/quiz-questions/10">Start</Link> </p>
            </div>
            </div>

        </section>
        </main>
        <Footer />
        </>
    );
}   

export default App;