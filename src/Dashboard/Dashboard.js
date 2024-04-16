import React, { useState } from "react";
import { useSelector } from "react-redux";
import img1 from "../Images/avatar.jpg";
import ReactApexChart from "react-apexcharts";

import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { Logout } from "../Redux/Actions/Formactions";
function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SampleData = {
    new: {
      count: "76",
      amount: "183",
    },
    completed: {
      count: "21",
      amount: "264",
    },
    expired: {
      count: "53",
      amount: "204",
    },
    total: {
      count: "150",
      amount: "651",
    },
  };

  const [chartOptions] = useState({
    chart: {
      type: "donut",
    },
    colors: ["#04D182", "#8886FF", "#160763"],
    labels: ["Category A", "Category B", "Category C"],
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
            },
            value: {
              show: true,
            },
            total: {
              show: true,
              label: "Total",
              fontSize: "18px",
            },
          },
        },
      },
    },
  });

  const newPercentage = (
    (parseFloat(SampleData.new.count) / parseFloat(SampleData.total.count)) *
    100
  ).toFixed(2);
  const completedPercentage = (
    (parseFloat(SampleData.completed.count) /
      parseFloat(SampleData.total.count)) *
    100
  ).toFixed(2);
  const expiredPercentage = (
    (parseFloat(SampleData.expired.count) /
      parseFloat(SampleData.total.count)) *
    100
  ).toFixed(2);
  const [chartSeries] = useState([
    Number(newPercentage),
    Number(completedPercentage),
    Number(expiredPercentage),
  ]);

  const handlelogout = () => {
    dispatch(Logout()).then((data) => {
      if (data) {
        navigate("/login");
      }
    });
  };

  return (
    <div className="bg-blue-500 min-h-[100vh]">
      <h1 className="text-[30px] font-bold">Dashboard</h1>
      <p
        className="text-end mr-[6%] text-[20px] font-bold text-[yellow] cursor-pointer"
        onClick={() => handlelogout()}
      >
        Log out
      </p>

      <div className="flex flex-col mt-[5%]  lg:flex-row lg:justify-between px-5">
        <div className="lg:w-[49%]  bg-white p-3  rounded-xl">
          <div className="flex justify-center">
            <div className="w-[100px] rounded-3xl">
              <img src={img1} className="rounded-[10%] lg:rounded-[50%]" />
            </div>
          </div>
          <div className="flex justify-center mt-[4%]">
            <div className="flex flex-col items-start">
              <span className="text-[20px]">
                name :<span> Akash kumar</span>
              </span>
              <span className="text-[20px]">
                email :<span> Test123@gmail.com</span>
              </span>
              <span className="text-[20px]">
                Jobrole :<span> Developer</span>
              </span>
            </div>
          </div>
        </div>
        <div className="lg:w-[49%] mt-[9%] lg:mt-0 bg-white p-3 flex lg:justify-center lg:items-center rounded-xl">
          <div className="lg:w-[50%] w-[100%]">
            {" "}
            <ReactApexChart
              options={chartOptions}
              series={chartSeries}
              type="donut"
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
