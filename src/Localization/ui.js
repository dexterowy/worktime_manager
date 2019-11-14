const texts = {
  appname: {
    pol: 'System Ewidencji Czasu Pracy',
    en: 'Worktime Manager',
  },
  dashboard: {
    header: {
      pol: 'Kokpit',
      en: 'Dashboard',
    },
  },
  employees: {
    header: {
      pol: 'Pracownicy',
      en: 'Employees',
    },
    table: {
      headers: {
        id: {
          pol: 'ID',
          en: 'ID',
        },
        firstName: {
          pol: 'IMIĘ',
          en: 'FIRST NAME',
        },
        lastName: {
          pol: 'NAZWISKO',
          en: 'LAST NAME',
        },
      },
    },
    buttons: {
      add: {
        pol: 'Dodaj Pracownika',
        en: 'Add an Employee',
      },
      report: {
        pol: 'Generuj raport',
        en: 'Generate report',
      },
    },
  },
  projects: {
    header: {
      pol: 'Projekty',
      en: 'Projects',
    },
    table: {
      headers: {
        id: {
          pol: 'ID',
          en: 'ID',
        },
        name: {
          pol: 'NAZWA',
          en: 'NAME',
        },
      },
    },
    buttons: {
      add: {
        pol: 'Dodaj Projekt',
        en: 'Add a Project',
      },
    },
  },
  details: {
    header: {
      pol: 'Szczegóły',
      en: 'Details',
    },
    detailsType: {
      project: {
        pol: 'Projekt',
        en: 'Project',
      },
      employee: {
        pol: 'Pracownik',
        en: 'Employee',
      },
    },
    listsType: {
      project: {
        pol: 'Powiązani pracownicy',
        en: 'Related employees',
      },
      employee: {
        pol: 'Powiązane projekty',
        en: 'Related projects',
      },
    },
    projects: {
      buttons: {
        edit: {
          pol: 'Edytuj Projekt',
          en: 'Edit Project',
        },
        delete: {
          pol: 'Usuń Projekt',
          en: 'Delete Project',
        },
        report: {
          pol: 'Generuj Raport',
          en: 'Generate Report',
        },
        hours: {
          pol: 'Wprowadź Godziny',
          en: 'Enter Worktime',
        },
      },
      id: {
        pol: 'ID',
        en: 'ID',
      },
      name: {
        pol: 'Nazwa',
        en: 'Title',
      },
      desc: {
        pol: 'Opis',
        en: 'Description',
      },

      listHeader: {
        id: {
          pol: 'ID',
          en: 'ID',
        },
        firstName: {
          pol: 'Imię',
          en: 'First name',
        },
        lastName: {
          pol: 'Nazwisko',
          en: 'Last name',
        },
        hours: {
          pol: 'Godziny',
          en: 'Hours',
        },
      },
    },
    employees: {
      buttons: {
        edit: {
          pol: 'Edytuj Pracownika',
          en: 'Edit Employee',
        },
        delete: {
          pol: 'Usuń Pracownika',
          en: 'Delete Employee',
        },
      },
      id: {
        pol: 'ID',
        en: 'ID',
      },
      firstName: {
        pol: 'Imię',
        en: 'First name',
      },
      lastName: {
        pol: 'Nazwisko',
        en: 'Last name',
      },
      phone: {
        pol: 'Telefon',
        en: 'Phone',
      },
      listHeader: {
        id: {
          pol: 'ID',
          en: 'ID',
        },
        name: {
          pol: 'Nazwa',
          en: 'Title',
        },
        hours: {
          pol: 'Godziny',
          en: 'Hours',
        },
      },
    },
  },
  actions: {
    delete: {
      employee: {
        pol: 'Czy napewno chcesz usunąć tego pracownika?',
        en: 'Are you sure you want to delete this employee?',
      },
      project: {
        pol: 'Czy napewno chcesz usunąć ten projekt?',
        en: 'Are you sure you want to delete this project?',
      },
    },
  },
  modals: {
    addEmployee: {
      header: {
        pol: 'Dodaj Pracownika',
        en: 'Add an Employee',
      },
      buttons: {
        save: {
          pol: 'Dodaj',
          en: 'Add',
        },
        cancel: {
          pol: 'Anuluj',
          en: 'Cancel',
        },
      },
      labels: {
        firstName: {
          pol: 'Imię',
          en: 'First Name',
        },
        lastName: {
          pol: 'Nazwisko',
          en: 'Last Name',
        },
        phone: {
          pol: 'Telefon',
          en: 'Phone',
        },
      },
    },
    addProject: {
      header: {
        pol: 'Dodaj Projekt',
        en: 'Add a Project',
      },
      buttons: {
        save: {
          pol: 'Dodaj',
          en: 'Add',
        },
        cancel: {
          pol: 'Anuluj',
          en: 'Cancel',
        },
      },
      labels: {
        title: {
          pol: 'Nazwa',
          en: 'Title',
        },
        desc: {
          pol: 'Opis',
          en: 'Description',
        },
      },
    },
    editEmployee: {
      header: {
        pol: 'Edytowanie Pracownika',
        en: 'Edit an Employee',
      },
      buttons: {
        save: {
          pol: 'Zapisz',
          en: 'Save',
        },
        cancel: {
          pol: 'Anuluj',
          en: 'Cancel',
        },
      },
      labels: {
        firstName: {
          pol: 'Imię',
          en: 'First Name',
        },
        lastName: {
          pol: 'Nazwisko',
          en: 'Last Name',
        },
        phone: {
          pol: 'Telefon',
          en: 'Phone',
        },
      },
    },
    editProject: {
      header: {
        pol: 'Edytowanie Projektu',
        en: 'Edit a Project',
      },
      buttons: {
        save: {
          pol: 'Zapisz',
          en: 'Save',
        },
        cancel: {
          pol: 'Anuluj',
          en: 'Cancel',
        },
      },
      labels: {
        title: {
          pol: 'Nazwa',
          en: 'Title',
        },
        desc: {
          pol: 'Opis',
          en: 'Description',
        },
      },
    },
    addHours: {
      header: {
        pol: 'Wpisz godziny',
        en: 'Add hours',
      },
      buttons: {
        save: {
          pol: 'Zapisz',
          en: 'Save',
        },
        cancel: {
          pol: 'Anuluj',
          en: 'Cancel',
        },
      },
      labels: {
        employeeId: {
          pol: 'ID pracownika',
          en: 'Employee ID',
        },
        hours: {
          pol: 'Godziny',
          en: 'Hours',
        },
      },
      warning: {
        pol:
          'Jeżeli pracownik ma już wpisane godziny do tego projektu, zostaną one nadpisane!',
        en:
          'If employee has any hours in this project, it will be overwritten!',
      },
    },
  },
};

export default texts;
