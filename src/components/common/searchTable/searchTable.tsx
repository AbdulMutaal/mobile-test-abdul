import { useState } from "react";
import { useTableSearch } from "./useTableSearch";
import styles from "./searchTable.module.css";
import SearchIcon from '@mui/icons-material/Search';
import StickyHeadTable from "./table/table";
import { users } from "../../../utils/sampleData";


const fetchUsers = async () => {
  const data  = users;
  return { data };
};

export default function SearchTable() {
  const [searchVal, setSearchVal] = useState(null);

  const { filteredData } = useTableSearch({
    searchVal,
    retrieve: fetchUsers
  });

  return (
    <>
        <div className={styles.SearchHeading}>
            <h2 className={styles.ActiveMHeading}>4,345 Active Members</h2>
            <div style={{position: 'relative'}}>
                <SearchIcon className={styles.searchIcon} />
                <input
                    onChange={(e: any) => setSearchVal(e.target.value)}
                    placeholder="Search here..."
                    style={{ position: "sticky", top: "0", left: "0", width: '258px' }}
                    type="text"
                    className={styles.SearchInput}
                />
            </div>
            
        </div>
      
      <br /> <br />
      <StickyHeadTable dataSource={filteredData} />
      {/* <Table
        rowKey="name"
        dataSource={filteredData}
        columns={userColumns}
        loading={loading}
        pagination={false}
      /> */}
    </>
  );
}
