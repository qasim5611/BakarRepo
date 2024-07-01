import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Dashboard from '../Pages/DashboardPage/Index';
import Wallets from '../Pages/WalletsPage/Index';
import SignIn from '../Pages/SignIn/Login';
import Transactions from '../Pages/Transactions/Transactions';
import Plans from '../Pages/Plans/Plans';
import Taxes from '../Pages/Taxes/Taxes';
import Cointracker from '../Pages/Cointracker/Cointracker';
import Performance from '../Pages/Performance/Performance';
import SeePricing from '../Pages/Plans/SeePricing';
import PreviewTaxImpact from '../Pages/PreviewTaxImpact/PreviewTaxImpact';
import CryptoPrices from '../Pages/CryptoPrices/CryptoPrices';
import ChooseSubscription from '../Pages/DashboardPage/ChooseSubscription';
import Signup from '../Pages/SignUp/SignUp';
import PageNotExist from '../Pages/404/404';
import Pastperformance from '../Pages/Performance/Pastperformance';
import Aboutus from '../Pages/Footerpages/Aboutus';
import Disclaimer from '../Pages/Footerpages/Disclaimer';
import Termsofservices from '../Pages/Footerpages/Termsofservices';
import Privacypolicy from '../Pages/Footerpages/Privacypolicy';
import Taxguide from '../Pages/Footerpages/Taxguide';
import Integration from '../Pages/Footerpages/Integration';
import Blog from '../Pages/Footerpages/Blog';
import Security from '../Pages/Footerpages/Security';
import Careers from '../Pages/Footerpages/Careers';
import Career from '../Pages/Career/Career';
import Home from '../Pages/LandingPage/Home';
import LossHarvesting from '../Pages/TaxLoss/LossHarvesting';
import Verifyotp from '../Pages/Verifyotp/Verifyotp';
import Forgetpassword from '../Pages/Forgtescreens/Forgetpassword';
import Passwordrecheck from '../Pages/Forgtescreens/Passwordrecheck';
import ForgotPasswordOtp from '../Pages/Verifyotp/ForgotPasswordOtp';
import PersistLogin from '../Components/persistLogin.jsx';
import Setting from '../Pages/Setting/index.jsx';
import Taxprofessionals from '../Pages/Taxes/Taxprofessionals.jsx';
import TaxesClient from '../Pages/Taxes/TaxesClient.jsx';

export default function Routing() {
    return (
        <Routes>
            <Route element={<PersistLogin />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/wallets" element={<Wallets />} />
                <Route path="/loss-harvesting" element={<LossHarvesting />} />
                <Route path="/tax-plans" element={<Plans />} />
                <Route path="/taxes" element={<Taxes />} />
                <Route path="/tax-pros" element={<Taxprofessionals />} />
                <Route path="/taxes-client" element={<TaxesClient />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/performance" element={<Performance />} />
                <Route path="/pastperformance" element={<Pastperformance />} />
                <Route path="/pricing-details" element={<SeePricing />} />
                <Route path="/career" element={<Career />} />
                <Route path="/previewtaximpact" element={<PreviewTaxImpact />} />
                <Route path="/crypto-prices" element={<CryptoPrices />} />
                <Route path="/subscription" element={<ChooseSubscription />} />
                <Route path="/about" element={<Aboutus />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/Termsofservices" element={<Termsofservices />} />
                <Route path="/Privacypolicy" element={<Privacypolicy />} />
                <Route path="/Taxguide" element={<Taxguide />} />
                <Route path="/integration" element={<Integration />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/security" element={<Security />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/cointracker" element={<Cointracker />} />
                <Route path="/settings" element={<Setting />} />
            </Route>
            {/*  simple routes for non-authenticated */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/Termsofservices" element={<Termsofservices />} />
            <Route path="/Privacypolicy" element={<Privacypolicy />} />
            <Route path="/Taxguide" element={<Taxguide />} />
            <Route path="/integration" element={<Integration />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/security" element={<Security />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/cointracker" element={<Cointracker />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgetpassword" element={<Forgetpassword />} />
            <Route path="/Passwordrecheck" element={<Passwordrecheck />} />
            <Route path="/verifyotp" element={<Verifyotp />} />
            <Route path="/forgotPasswordOtp" element={<ForgotPasswordOtp />} />
            <Route path="*" element={<PageNotExist />}></Route>
        </Routes>
    );
}
