/* eslint react/prop-types: 0 */
import 'jsdom-global/register';
import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';

import _ from 'rebotable/src/utils';
import editingCellFactory from '../src/editing-cell';
import * as constants from '../src/const';
import TextEditor from '../src/text-editor';
import DateEditor from '../src/date-editor';
import DropDownEditor from '../src/dropdown-editor';
import TextAreaEditor from '../src/textarea-editor';
import CheckBoxEditor from '../src/checkbox-editor';
import EditorIndicator from '../src/editor-indicator';

const EditingCell = editingCellFactory(_);
const TableRowWrapper = props => (
  <table>
    <tbody>
      <tr>{ props.children }</tr>
    </tbody>
  </table>
);


describe('EditingCell', () => {
  let wrapper;
  let onUpdate;
  let onEscape;
  const row = {
    id: 1,
    name: 'A'
  };

  const rowIndex = 1;
  const columnIndex = 1;

  let column = {
    dataField: 'id',
    text: 'ID'
  };

  beforeEach(() => {
    onEscape = sinon.stub();
    onUpdate = sinon.stub();
    wrapper = mount(
      <EditingCell
        row={ row }
        rowIndex={ rowIndex }
        columnIndex={ columnIndex }
        column={ column }
        onUpdate={ onUpdate }
        onEscape={ onEscape }
      />
    );
  });

  it('should render default editor successfully', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('td').length).toBe(1);
    expect(wrapper.find(TextEditor).length).toBe(1);
    expect(wrapper.state().invalidMessage).toBeNull();
  });

  it('should render TextEditor with correct props', () => {
    const textEditor = wrapper.find(TextEditor);
    expect(textEditor.props().defaultValue).toEqual(row[column.dataField]);
    expect(textEditor.props().onKeyDown).toBeDefined();
    expect(textEditor.props().onBlur).toBeDefined();
    expect(textEditor.props().className).toEqual('');
  });

  it('should not render EditorIndicator due to state.invalidMessage is null', () => {
    const indicator = wrapper.find(EditorIndicator);
    expect(indicator.length).toEqual(0);
  });

  it('when press ENTER on TextEditor should call onUpdate correctly', () => {
    const newValue = 'test';
    const textEditor = wrapper.find(TextEditor);
    sinon.stub(textEditor.instance(), 'getValue').returns(newValue);
    textEditor.simulate('keyDown', { keyCode: 13 });
    expect(onUpdate.callCount).toBe(1);
    expect(onUpdate.calledWith(row, column, newValue)).toBe(true);
  });

  it('when press ESC on TextEditor should call onEscape correctly', () => {
    const textEditor = wrapper.find(TextEditor);
    textEditor.simulate('keyDown', { keyCode: 27 });
    expect(onEscape.callCount).toBe(1);
  });

  it('when blur from TextEditor should call onEscape correctly', () => {
    const textEditor = wrapper.find(TextEditor);
    textEditor.simulate('blur');
    expect(onEscape.callCount).toBe(1);
  });

  describe('if style prop is defined', () => {
    const customStyle = { backgroundColor: 'red' };
    beforeEach(() => {
      wrapper = shallow(
        <EditingCell
          row={ row }
          rowIndex={ rowIndex }
          columnIndex={ columnIndex }
          column={ column }
          onUpdate={ onUpdate }
          onEscape={ onEscape }
          style={ customStyle }
        />
      );
    });

    it('should render component with style successfully', () => {
      expect(wrapper.length).toBe(1);
      expect(wrapper.find('td').prop('style')).toEqual(customStyle);
    });
  });

  describe('if className prop is defined', () => {
    const className = 'test-class';
    beforeEach(() => {
      wrapper = shallow(
        <EditingCell
          row={ row }
          rowIndex={ rowIndex }
          columnIndex={ columnIndex }
          column={ column }
          onUpdate={ onUpdate }
          onEscape={ onEscape }
          className={ className }
        />
      );
    });

    it('should render component with style successfully', () => {
      expect(wrapper.length).toBe(1);
      expect(wrapper.hasClass(className)).toBe(true);
    });
  });

  describe('if column.editorClasses is defined', () => {
    let columnWithEditorClasses;
    const classes = 'test test1';

    describe('and it is a function', () => {
      beforeEach(() => {
        columnWithEditorClasses = {
          ...column,
          editorClasses: jest.fn(() => classes)
        };
        wrapper = shallow(
          <EditingCell
            row={ row }
            rowIndex={ rowIndex }
            columnIndex={ columnIndex }
            column={ columnWithEditorClasses }
            onUpdate={ onUpdate }
            onEscape={ onEscape }
          />
        );
      });

      it('should render TextEditor with correct props', () => {
        const textEditor = wrapper.find(TextEditor);
        expect(textEditor.props().className).toEqual(classes);
      });

      it('should call column.editorClasses correctly', () => {
        expect(columnWithEditorClasses.editorClasses).toHaveBeenCalledTimes(1);
        expect(columnWithEditorClasses.editorClasses).toHaveBeenCalledWith(
          _.get(row, column.dataField),
          row,
          rowIndex,
          columnIndex
        );
      });
    });

    describe('and it is a string', () => {
      beforeEach(() => {
        columnWithEditorClasses = {
          ...column,
          editorClasses: classes
        };
        wrapper = shallow(
          <EditingCell
            row={ row }
            rowIndex={ rowIndex }
            columnIndex={ columnIndex }
            column={ columnWithEditorClasses }
            onUpdate={ onUpdate }
            onEscape={ onEscape }
          />
        );
      });

      it('should render TextEditor with correct props', () => {
        const textEditor = wrapper.find(TextEditor);
        expect(textEditor.props().className).toEqual(classes);
      });
    });
  });

  describe('if column.editorStyle is defined', () => {
    let columnWithEditorStyle;
    const style = { color: 'red' };

    describe('and it is a function', () => {
      beforeEach(() => {
        columnWithEditorStyle = {
          ...column,
          editorStyle: jest.fn(() => style)
        };
        wrapper = shallow(
          <EditingCell
            row={ row }
            rowIndex={ rowIndex }
            columnIndex={ columnIndex }
            column={ columnWithEditorStyle }
            onUpdate={ onUpdate }
            onEscape={ onEscape }
          />
        );
      });

      it('should render TextEditor with correct props', () => {
        const textEditor = wrapper.find(TextEditor);
        expect(textEditor.props().style).toEqual(style);
      });

      it('should call column.editorStyle correctly', () => {
        expect(columnWithEditorStyle.editorStyle).toHaveBeenCalledTimes(1);
        expect(columnWithEditorStyle.editorStyle).toHaveBeenCalledWith(
          _.get(row, column.dataField),
          row,
          rowIndex,
          columnIndex
        );
      });
    });

    describe('and it is an object', () => {
      beforeEach(() => {
        columnWithEditorStyle = {
          ...column,
          editorStyle: style
        };
        wrapper = shallow(
          <EditingCell
            row={ row }
            rowIndex={ rowIndex }
            columnIndex={ columnIndex }
            column={ columnWithEditorStyle }
            onUpdate={ onUpdate }
            onEscape={ onEscape }
          />
        );
      });

      it('should render TextEditor with correct props', () => {
        const textEditor = wrapper.find(TextEditor);
        expect(textEditor.props().style).toEqual(style);
      });
    });
  });

  describe('if blurToSave prop is true', () => {
    beforeEach(() => {
      wrapper = mount(
        <TableRowWrapper>
          <EditingCell
            row={ row }
            rowIndex={ rowIndex }
            columnIndex={ columnIndex }
            column={ column }
            onUpdate={ onUpdate }
            onEscape={ onEscape }
            blurToSave
          />
        </TableRowWrapper>
      );
    });

    it('when blur from TextEditor should call onUpdate correctly', () => {
      const textEditor = wrapper.find(TextEditor);
      textEditor.simulate('blur');
      expect(onUpdate.callCount).toBe(1);
      expect(onUpdate.calledWith(row, column, `${row[column.dataField]}`)).toBe(true);
    });
  });

  describe('when column.validator is defined', () => {
    let newValue;
    let validForm;
    let validatorCallBack;

    describe('and column.validator return an object', () => {
      beforeEach(() => {
        newValue = 'newValue';
        validForm = { valid: false, message: 'Something is invalid' };
        validatorCallBack = sinon.stub().returns(validForm);
        column = {
          dataField: 'id',
          text: 'ID',
          validator: validatorCallBack
        };
        wrapper = mount(
          <EditingCell
            row={ row }
            rowIndex={ rowIndex }
            columnIndex={ columnIndex }
            column={ column }
            onUpdate={ onUpdate }
            onEscape={ onEscape }
          />
        );
        wrapper.instance().beforeComplete(newValue);
      });

      it('should call column.validator successfully', () => {
        expect(validatorCallBack.callCount).toBe(1);
        expect(validatorCallBack.calledWith(newValue, row, column)).toBe(true);
      });

      it('should not call onUpdate', () => {
        expect(onUpdate.callCount).toBe(0);
      });

      it('should set indicatorTimer successfully', () => {
        expect(wrapper.instance().indicatorTimer).toBeDefined();
      });

      it('should set invalidMessage state correctly', () => {
        expect(wrapper.state().invalidMessage).toEqual(validForm.message);
      });

      it('should render TextEditor with correct shake and animated class', () => {
        const editor = wrapper.find(TextEditor);
        expect(editor.html()).toEqual('<input type="text" class="form-control editor edit-text animated shake">');
        /* Following is better, but it will not work after upgrade React to 16 and enzyme... */
        // expect(editor.length).toEqual(1);
        // expect(editor.props().classNames).toEqual('animated shake');
      });

      /* Following is better, but it will not work after upgrade React to 16 and enzyme... */
      xit('should render EditorIndicator correctly', () => {
        const indicator = wrapper.find(EditorIndicator);
        expect(indicator.length).toEqual(1);
        expect(indicator.props().invalidMessage).toEqual(validForm.message);
      });
    });

    describe('and column.validator return true or something', () => {
      beforeEach(() => {
        newValue = 'newValue';
        validForm = true;
        validatorCallBack = sinon.stub().returns(validForm);
        column = {
          dataField: 'id',
          text: 'ID',
          validator: validatorCallBack
        };
        wrapper = mount(
          <EditingCell
            row={ row }
            rowIndex={ rowIndex }
            columnIndex={ columnIndex }
            column={ column }
            onUpdate={ onUpdate }
            onEscape={ onEscape }
          />
        );
        wrapper.instance().beforeComplete(newValue);
      });

      it('should call column.validator successfully', () => {
        expect(validatorCallBack.callCount).toBe(1);
        expect(validatorCallBack.calledWith(newValue, row, column)).toBe(true);
      });

      it('should call onUpdate', () => {
        expect(onUpdate.callCount).toBe(1);
      });
    });
  });

  describe('if column.editorRenderer is defined', () => {
    const TestEditor = () => <input type="text" />;

    beforeEach(() => {
      column = {
        dataField: 'id',
        text: 'ID',
        editorRenderer: sinon.stub().returns(<TestEditor />)
      };

      wrapper = mount(
        <EditingCell
          row={ row }
          rowIndex={ rowIndex }
          columnIndex={ columnIndex }
          column={ column }
          onUpdate={ onUpdate }
          onEscape={ onEscape }
        />
      );
    });

    it('should call column.editorRenderer correctly', () => {
      expect(column.editorRenderer.callCount).toBe(1);
    });

    it('should render correctly', () => {
      expect(wrapper.find(TestEditor)).toHaveLength(1);
    });
  });

  describe('if column.editor is select', () => {
    beforeEach(() => {
      column = {
        dataField: 'id',
        text: 'ID',
        editor: {
          type: constants.EDITTYPE.SELECT,
          options: [{
            value: 1,
            label: 'A'
          }]
        }
      };

      wrapper = mount(
        <EditingCell
          row={ row }
          rowIndex={ rowIndex }
          columnIndex={ columnIndex }
          column={ column }
          onUpdate={ onUpdate }
          onEscape={ onEscape }
        />
      );
    });

    it('should render dropdown editor successfully', () => {
      const editor = wrapper.find(DropDownEditor);
      expect(wrapper.length).toBe(1);
      expect(editor.length).toBe(1);
      expect(editor.props().options).toEqual(column.editor.options);
    });
  });

  describe('if column.editor is textarea', () => {
    beforeEach(() => {
      column = {
        dataField: 'id',
        text: 'ID',
        editor: {
          type: constants.EDITTYPE.TEXTAREA
        }
      };

      wrapper = mount(
        <EditingCell
          row={ row }
          rowIndex={ rowIndex }
          columnIndex={ columnIndex }
          column={ column }
          onUpdate={ onUpdate }
          onEscape={ onEscape }
        />
      );
    });

    it('should render textarea editor successfully', () => {
      const editor = wrapper.find(TextAreaEditor);
      expect(wrapper.length).toBe(1);
      expect(editor.length).toBe(1);
    });
  });

  describe('if column.editor is checkbox', () => {
    beforeEach(() => {
      column = {
        dataField: 'id',
        text: 'ID',
        editor: {
          type: constants.EDITTYPE.CHECKBOX
        }
      };

      wrapper = mount(
        <EditingCell
          row={ row }
          rowIndex={ rowIndex }
          columnIndex={ columnIndex }
          column={ column }
          onUpdate={ onUpdate }
          onEscape={ onEscape }
        />
      );
    });

    it('should render checkbox editor successfully', () => {
      const editor = wrapper.find(CheckBoxEditor);
      expect(wrapper.length).toBe(1);
      expect(editor.length).toBe(1);
    });
  });

  describe('if column.editor is date', () => {
    beforeEach(() => {
      column = {
        dataField: 'id',
        text: 'ID',
        editor: {
          type: constants.EDITTYPE.DATE
        }
      };

      wrapper = mount(
        <EditingCell
          row={ row }
          rowIndex={ rowIndex }
          columnIndex={ columnIndex }
          column={ column }
          onUpdate={ onUpdate }
          onEscape={ onEscape }
        />
      );
    });

    it('should render date editor successfully', () => {
      const editor = wrapper.find(DateEditor);
      expect(wrapper.length).toBe(1);
      expect(editor.length).toBe(1);
    });
  });
});
