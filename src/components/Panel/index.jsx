import { Splitter, SplitterPanel } from 'primereact/splitter';
import ListItems from '../ListItems';
import AddItems from '../AddItems';
import DetailItems from '../DetailItems';

const Panel = () => {
  return (
    <Splitter style={{ height: '100vh' }}>
      <SplitterPanel className="flex align-items-center justify-content-center" size={20} minSize={10}>
        <ListItems />
      </SplitterPanel>
      <SplitterPanel size={80}>
        <Splitter layout="vertical">
          <SplitterPanel className="flex align-items-center justify-content-center" size={60}>
            <DetailItems />
          </SplitterPanel>
          <SplitterPanel size={40}>
            <Splitter>
              <SplitterPanel className="flex align-items-center justify-content-center" size={20}>
                <AddItems />
              </SplitterPanel>
            </Splitter>
          </SplitterPanel>
        </Splitter>
      </SplitterPanel>
    </Splitter>
  )
}

export default Panel;