import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="navigation">
        <div className="left-side1" />
        <div className="help">Help</div>
        <div className="contact-us">Contact Us</div>
        <div className="settings">Settings</div>
        <div className="users">Users</div>
        <div className="schedules">Schedules</div>
        <div className="transactions">Transactions</div>
        <b className="dashboard1">Dashboard</b>
        <img className="transaction-icon" alt="" src="/transaction-icon.svg" />
        <img className="schedule-icon" alt="" src="/schedule-icon.svg" />
        <img className="dashboard-icon" alt="" src="/dashboard-icon.svg" />
        <img className="setting-icon" alt="" src="/setting-icon.svg" />
        <img className="user-icon" alt="" src="/user-icon.svg" />
        <b className="board1">Board.</b>
      </div>
      <div className="total-transactions">
        <div className="card2">
          <div className="card3" />
        </div>
        <div className="total-transactions1">Total Transactions</div>
        <b className="b">1,520</b>
      </div>
      <div className="total-revenues">
        <div className="card2">
          <div className="card5" />
        </div>
        <div className="total-revenues1">Total Revenues</div>
        <b className="b1">$2,129,430</b>
        <img className="vector-icon" alt="" src="/vector.svg" />
      </div>
      <div className="total-likes">
        <div className="card2">
          <div className="card7" />
        </div>
        <div className="total-likes1">Total Likes</div>
        <b className="b2">9,721</b>
        <img className="vector-icon1" alt="" src="/vector1.svg" />
      </div>
      <div className="total-users">
        <div className="card2">
          <div className="card9" />
        </div>
        <img className="vector-icon2" alt="" src="/vector2.svg" />
        <div className="total-users1">Total Users</div>
        <b className="b3">892</b>
      </div>
      <form className="activities-card">
        <div className="card10">
          <div className="card11" />
        </div>
        <div className="guest">Guest</div>
        <div className="user">User</div>
        <b className="activities">Activities</b>
        <div className="may-june-2021-parent">
          <div className="may-june">May - June 2021</div>
          <img className="vector-icon3" alt="" src="/vector3.svg" />
        </div>
        <div className="chart">
          <div className="parent">
            <div className="div1">500</div>
            <div className="group-child" />
          </div>
          <div className="group">
            <div className="div1">300</div>
            <div className="group-child" />
          </div>
          <div className="container">
            <div className="div1">400</div>
            <div className="group-child" />
          </div>
          <div className="group-div">
            <div className="div1">200</div>
            <div className="group-child" />
          </div>
          <div className="parent1">
            <div className="div1">100</div>
            <div className="group-child" />
          </div>
          <div className="parent2">
            <div className="div6">0</div>
            <div className="group-child2" />
          </div>
        </div>
        <img className="activities-card-child" alt="" src="/ellipse-3.svg" />
        <img className="activities-card-item" alt="" src="/ellipse-4.svg" />
      </form>
      <div className="top-products-card">
        <div className="card12">
          <div className="card11" />
        </div>
        <div className="div7">
          <img className="child" alt="" src="/ellipse-6.svg" />
          <b className="basic-tees">Basic Tees</b>
          <div className="div8">55%</div>
        </div>
        <div className="may-june-2021-wrapper">
          <div className="may-june1">May - June 2021</div>
        </div>
        <img className="vector-icon4" alt="" src="/vector3.svg" />
        <div className="div9">
          <img className="child" alt="" src="/ellipse-61.svg" />
          <b className="basic-tees">Custom Short Pants</b>
          <div className="div8">31%</div>
        </div>
        <div className="div11">
          <img className="child" alt="" src="/ellipse-62.svg" />
          <b className="basic-tees">Super Hoodies</b>
          <div className="div8">14%</div>
        </div>
        <b className="top-products">Top products</b>
        <img className="pie-chart-icon" alt="" src="/pie-chart.svg" />
      </div>
      <div className="schedules-card">
        <div className="card12">
          <div className="card11" />
        </div>
        <b className="todays-schedule">Today’s schedule</b>
        <div className="meeting-with-suppliers-from-ku-parent">
          <b className="meeting-with-suppliers">
            Meeting with suppliers from Kuta Bali
          </b>
          <div className="div13">14.00-15.00</div>
          <div className="at-sunset-road">{`at Sunset Road, Kuta, Bali `}</div>
          <div className="group-child3" />
        </div>
        <div className="see-all">See All</div>
        <input className="vector" type="text" readOnly />
        <div className="check-operation-at-giga-factor-parent">
          <b className="meeting-with-suppliers">
            Check operation at Giga Factory 1
          </b>
          <div className="div13">18.00-20.00</div>
          <div className="at-sunset-road">{`at Central Jakarta `}</div>
          <div className="group-child4" />
        </div>
      </div>
      <div className="chart-weeks">
        <div className="week-1">Week 1</div>
        <div className="week-2">Week 2</div>
        <div className="week-3">Week 3</div>
        <div className="week-4">Week 4</div>
      </div>
      <img className="line-chart-2-icon" alt="" src="/line-chart-2.svg" />
      <img className="line-chart-1-icon" alt="" src="/line-chart-1.svg" />
      <img
        className="total-transactions-icon"
        alt=""
        src="/total-transactions-icon.svg"
      />
      <div className="header">
        <b className="dashboard2">Dashboard</b>
        <select className="search-bar" />
        <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
        <img className="vector-icon5" alt="" src="/vector4.svg" />
      </div>
    </div>
  );
};

export default Dashboard;
